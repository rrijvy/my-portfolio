import { test, expect } from '@playwright/test'

test('renders portfolio home with name and sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ashikur Rahman Rijvy')
  await expect(page.getByRole('heading', { name: 'Where the work happened' })).toBeVisible()
  await expect(page.getByRole('link', { name: /See my work/i })).toBeVisible()
})
