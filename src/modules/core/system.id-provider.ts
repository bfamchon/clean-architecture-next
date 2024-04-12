import { IDProvider } from '@/modules/core/id-provider';
import { nanoid } from 'nanoid';

export class SystemIDProvider implements IDProvider {
  generate(): string {
    return nanoid();
  }
}
