let handleCallback = (options) => {
  const { success: _success, fail: _fail } = options;
  options.success = e => {
    console.log('改写了options success');
    _success(e)
  }
  options.fail = e => {
    console.log('改写了options success');
    _fail(e)
  }
};

let handlePromise = (rs, rj) => {
  setTimeout(rs, 1000);
};

let promise = new Promise(handlePromise);

let callPromise = (options) => {
  handleCallback(options);
  promise.then(options.success);
}

let options = {
  success: (e) => {
    console.log('初始化的options success');
  }
}

callPromise(options);