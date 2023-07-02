import { Pipe } from '@angular/core';
import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe : StrengthPipe; 
  beforeEach(()=>{
    pipe = new StrengthPipe();
  })
  it('create an instance for strength pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display weak if value is 5',()=>{
    expect(pipe.transform(5)).toEqual('5(weak)')
  })

  it('should display strong if value is 11', () => {
    expect(pipe.transform(11)).toEqual('11(strong)');
  });
});
