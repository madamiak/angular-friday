import {S01FlagServiceService} from './s01-flag-service.service';

describe('S01FlagServiceService', () => {

  fit('some thing should happen when we do some thing', () => {

    let flag = false;

    const testPromise = new Promise((resolve) => {
      setTimeout(() => {
      }, 100);
    });

    testPromise.then((result) => {
      flag = true;
    });

    setTimeout(() => {
      expect(flag).toBe(true);
    }, 110)
  });
});
