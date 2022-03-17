import { MyJSONPipe } from './my-json.pipe';

describe('MyJSONPipe', () => {
  it('create an instance', () => {
    const pipe = new MyJSONPipe();
    expect(pipe).toBeTruthy();
  });
});
