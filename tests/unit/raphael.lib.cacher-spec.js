import { cacher } from '../../source/raphael.lib';
var addFunction = function(a, b){
  this.called++;
  if(a == null || a == undefined || b == null || b == undefined){
    return;
  }
  return a+b;
};

describe('Cacher basic functionality tests ', function(){
  var cachedAddFunction, context;

  beforeEach(()=>{
    context = {
      called : 0
    };
    cachedAddFunction = cacher(addFunction,context);
  });
  it('should cache the result', function(){
    var resA, resB, resC;
    resA = cachedAddFunction(1,2);
    resB = cachedAddFunction(1,2);
    resC = cachedAddFunction(1,2);
    expect(resA === 3).toBe(true);
    expect(resA === resB).toBe(true);
    expect(resA === resC).toBe(true);
    expect(context.called).toBe(1);
  });
  it('should behave same for null and empty string', function(){
    var resA, resB, resC;
    resA = cachedAddFunction(null,'');
    resB = cachedAddFunction(null,'');
    expect(resA).toBeUndefined();;
    expect(resB).toBe(resA);
    expect(context.called).toBe(1);
  });
});

describe('Cacher caching using limited cache size', function(){
  var cachedAddFunction, context;
  beforeEach(() => {
    context = {
      called : 0
    };
    cachedAddFunction = cacher(addFunction, context, null, null, 10);
  });
  it('should call the function after cache gets invalidated', function(){
    for(var i = 0; i <= 10; i++){
      cachedAddFunction(i, i+1); 
    }
    cachedAddFunction(0, 1);
    expect(context.called).toBe(12);
  });
  it('should invalidate a node', function(){
    for(var i = 0; i < 10; i++){
      cachedAddFunction(i , i+1);
    }
    expect(context.called).toBe(10);
    cachedAddFunction(2, 3);
    expect(context.called).toBe(10);
    cachedAddFunction(3, 4);
    expect(context.called).toBe(10);
    cachedAddFunction(4, 5);
    expect(context.called).toBe(10);
    cachedAddFunction(5, 6);
    expect(context.called).toBe(10);
    cachedAddFunction(6, 7);
    expect(context.called).toBe(10);
    cachedAddFunction(7, 8);
    expect(context.called).toBe(10);
    cachedAddFunction(8, 9);
    expect(context.called).toBe(10);
    cachedAddFunction(9, 10);
    expect(context.called).toBe(10);
    cachedAddFunction(10, 11);
    expect(context.called).toBe(11);
    cachedAddFunction(11, 12);
    expect(context.called).toBe(12);
    cachedAddFunction(1,2);
    expect(context.called).toBe(13);
  });
  it('should update the least recently used element properly', function(){
    var count = 0, res;
    for(var i = 0; i < 10; i++){
      count++;
      res = cachedAddFunction(i , i+1);
      expect(res).toBe(i + i + 1);
    }
    res = cachedAddFunction(0, 1);
    expect(res).toBe(1);
    expect(context.called).toBe(count);
    res = cachedAddFunction(30, 40);
    expect(res).toBe(70);
    expect(context.called).toBe(count + 1);
  });
});
