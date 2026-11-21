import assert from 'node:assert'
import { afterEach, beforeEach, describe, it } from 'node:test'
import {
  getAppLanguage,
  resolveAppLanguage,
  t,
} from '../../src/lib/i18n'

const languageStorageKey = 'github-desktop-language'

describe('Simplified Chinese localization', () => {
  beforeEach(() => localStorage.removeItem(languageStorageKey))
  afterEach(() => localStorage.removeItem(languageStorageKey))

  it('uses an explicit language choice over the system language', () => {
    assert.strictEqual(resolveAppLanguage('en', 'zh-CN'), 'en')
    assert.strictEqual(resolveAppLanguage('zh-CN', 'en-US'), 'zh-CN')
  })

  it('detects Chinese locales and falls back to English', () => {
    assert.strictEqual(resolveAppLanguage(null, 'zh-CN'), 'zh-CN')
    assert.strictEqual(resolveAppLanguage(null, 'zh-Hans-CN'), 'zh-CN')
    assert.strictEqual(resolveAppLanguage(null, 'zh_TW'), 'zh-CN')
    assert.strictEqual(resolveAppLanguage(null, 'en-US'), 'en')
    assert.strictEqual(resolveAppLanguage('unsupported', undefined), 'en')
  })

  it('keeps English as the fallback and uses Chinese translations when selected', () => {
    localStorage.setItem(languageStorageKey, 'en')
    assert.strictEqual(getAppLanguage(), 'en')
    assert.strictEqual(t('repos.clone', 'Clone'), 'Clone')

    localStorage.setItem(languageStorageKey, 'zh-CN')
    assert.strictEqual(getAppLanguage(), 'zh-CN')
    assert.strictEqual(t('repos.clone', 'Clone'), '克隆')
  })
})
