import { AppfeatureModule } from './appfeature.module';

describe('AppfeatureModule', () => {
  let appfeatureModule: AppfeatureModule;

  beforeEach(() => {
    appfeatureModule = new AppfeatureModule();
  });

  it('should create an instance', () => {
    expect(appfeatureModule).toBeTruthy();
  });
});
