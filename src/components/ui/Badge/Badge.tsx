import { Box } from 'components/ui/Box';
import clsx from 'clsx';
import styles from 'components/ui/Badge/badge.module.css';

export const BADGE_STATUS = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export type BadgeStatusType = (typeof BADGE_STATUS)[keyof typeof BADGE_STATUS];

interface BadgeProps {
  label: string;
  variant: BadgeStatusType;
}
export const Badge = ({ label, variant }: BadgeProps) => {
  const classNames = [
    variant === BADGE_STATUS.WARNING && styles.warning,
    variant === BADGE_STATUS.SUCCESS && styles.success,
    variant === BADGE_STATUS.DANGER && styles.danger,
  ];
  return (
    <Box className={clsx(styles.wrapper, classNames)}>
      <Box className={clsx(styles.dot)} />
      <Box className={clsx(styles.label)}>{label}</Box>
    </Box>
  );
};
