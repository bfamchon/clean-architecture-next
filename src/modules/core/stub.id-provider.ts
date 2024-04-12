import { IDProvider } from '@/modules/core/id-provider';

export class StubIDProvider implements IDProvider {
  generate(): string {
    return '1';
  }
}
