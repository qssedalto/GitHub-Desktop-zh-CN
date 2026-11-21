import { IMenuItem } from '../../lib/menu-item'
import { writeClipboardText } from '../main-process-proxy'
import { Branch, BranchType } from '../../models/branch'
import { t } from '../../lib/i18n'

interface IBranchContextMenuConfig {
  branch: Branch
  onRenameBranch?: (branchName: string) => void
  onViewBranchOnGitHub?: () => void
  onViewPullRequestOnGitHub?: () => void
  onDeleteBranch?: (branchName: string) => void
  onCheckoutInNewWorktree?: (branch: Branch) => void
}

export function generateBranchContextMenuItems(
  config: IBranchContextMenuConfig
): IMenuItem[] {
  const {
    branch,
    onRenameBranch,
    onViewBranchOnGitHub,
    onViewPullRequestOnGitHub,
    onDeleteBranch,
    onCheckoutInNewWorktree,
  } = config
  const items = new Array<IMenuItem>()

  if (onRenameBranch !== undefined) {
    items.push({
      label: t('branch.rename', 'Rename…'),
      action: () => onRenameBranch(branch.name),
      enabled: branch.type === BranchType.Local,
    })
  }

  items.push({
    label: t('branch.copyName', __DARWIN__ ? 'Copy Branch Name' : 'Copy branch name'),
    action: () => writeClipboardText(branch.name),
  })

  if (onViewBranchOnGitHub !== undefined) {
    items.push({
      label: t('branch.viewGitHub', 'View Branch on GitHub'),
      action: () => onViewBranchOnGitHub(),
    })
  }

  if (onViewPullRequestOnGitHub !== undefined) {
    items.push({
      label: t('branch.viewPullRequest', 'View Pull Request on GitHub'),
      action: () => onViewPullRequestOnGitHub(),
    })
  }

  if (onCheckoutInNewWorktree !== undefined) {
    items.push({
      label: t('branch.checkoutWorktree', __DARWIN__ ? 'Checkout in New Worktree…' : 'Checkout in new worktree…'),
      action: () => onCheckoutInNewWorktree(branch),
    })
  }

  items.push({ type: 'separator' })

  if (onDeleteBranch !== undefined) {
    items.push({
      label: t('branch.delete', 'Delete…'),
      action: () => onDeleteBranch(branch.name),
    })
  }

  return items
}
