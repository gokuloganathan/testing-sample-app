import { LoggerService } from "./logger.service";

describe('logger service',()=>{
  let service:LoggerService;
  beforeEach(()=>{
    service = new LoggerService();
  })
  it('logger messages[] should be empty at start',()=>{
    //arrange
    //service = new LoggerService();
    let count = service.messages.length;

    //act

    //assert
    expect(count).toBe(0)
  })

    it('logger messages[] should be empty after clearing all', () => {
      //arrange
      //service = new LoggerService();
      service.log('deletable message')
      
      //act
      service.clear()
      let count = service.messages.length;

      //assert
      expect(count).toBe(0);
    });
})