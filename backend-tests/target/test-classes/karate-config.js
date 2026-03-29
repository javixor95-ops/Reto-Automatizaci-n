function fn() {
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);

  var config = {
    baseUrl: 'https://jsonplaceholder.typicode.com'
  };

  return config;
}
