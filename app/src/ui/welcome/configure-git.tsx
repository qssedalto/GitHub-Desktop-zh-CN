import * as React from 'react'
import { WelcomeStep } from './welcome'
import { Account } from '../../models/account'
import { ConfigureGitUser } from '../lib/configure-git-user'
import { Button } from '../lib/button'
import { t } from '../../lib/i18n'

interface IConfigureGitProps {
  readonly accounts: ReadonlyArray<Account>
  readonly advance: (step: WelcomeStep) => void
  readonly done: () => void
  readonly globalUserName: string | undefined
  readonly globalUserEmail: string | undefined
}

/** The Welcome flow step to configure git. */
export class ConfigureGit extends React.Component<IConfigureGitProps, {}> {
  public render() {
    return (
      <section id="configure-git" aria-label={t('welcome.configureGit', 'Configure Git')}>
        <h1 className="welcome-title">{t('welcome.configureGit', 'Configure Git')}</h1>
        <p className="welcome-text">
          {t('welcome.configureGitDescription', 'This is used to identify the commits you create. Anyone will be able to see this information if you publish commits.')}
        </p>

        <ConfigureGitUser
          accounts={this.props.accounts}
          onSave={this.props.done}
          saveLabel={t('welcome.finish', 'Finish')}
          globalUserName={this.props.globalUserName}
          globalUserEmail={this.props.globalUserEmail}
        >
          <Button onClick={this.cancel}>{t('welcome.cancel', 'Cancel')}</Button>
        </ConfigureGitUser>
      </section>
    )
  }

  private cancel = () => {
    this.props.advance(WelcomeStep.Start)
  }
}
