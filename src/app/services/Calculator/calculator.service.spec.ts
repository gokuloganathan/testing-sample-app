import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('Calculator service', () => {
  let loggerServiceMock: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    loggerServiceMock = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerServiceMock);
  });
  it('it should subtract two numbers', () => {
    //making direct call
    // const loggerService = new LoggerService();
    // const calculator = new CalculatorService(loggerService);

    //using mockObj from beforeEach
    let res = calculator.subtract(2, 2);
    expect(res).toBe(0);
    expect(loggerServiceMock.log).toHaveBeenCalledTimes(1);
  });
  it('it should add two numbers', () => {
    //const loggerService = new LoggerService();
    //const calculator = new CalculatorService(loggerService);

    let res = calculator.add(2, 2);
    expect(res).toBe(4);
    expect(loggerServiceMock.log).toHaveBeenCalledTimes(1);
  });
});

//pending() - to move test status to pause
//fail() - to make test status fail
