import {
  Fallback as RadixAvatarFallback,
  Image as RadixAvatarIamge,
  Root as RadixAvatar,
} from '@radix-ui/react-avatar';
import clsx from 'clsx';
import styles from 'components/ui/Avatar/avatar.module.css';

type AvatarVariantType = 'big-ears' | 'croodles' | 'initials';

interface AvatarProps {
  fullName: string;
  variant?: AvatarVariantType;
  scale?: number;
}
export const Avatar = ({
  fullName,
  variant = 'initials',
  scale = 60,
}: AvatarProps) => {
  return (
    <RadixAvatar className={clsx(styles.wrapper)}>
      <RadixAvatarIamge
        className={clsx(styles.avatar_image)}
        src={`https://api.dicebear.com/5.x/${variant}/svg?scale=${scale}&seed=${fullName}`}
        alt={fullName}
      />
      <RadixAvatarFallback
        className={clsx(styles.avatar_fallback)}
        delayMs={600}>
        CT
      </RadixAvatarFallback>
    </RadixAvatar>
  );
};
