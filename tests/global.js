before(async () => {
  console.log('global before');
});

beforeEach(async () => {
  console.log('global beforeEach');
});

afterEach(async () => {
  console.log('global afterEach');
});

after(async () => {
  console.log('global after');
});