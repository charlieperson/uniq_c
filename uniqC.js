exports.uniq_c = function(a){
  var output = [];
  var count = 1;
  for(i=0; i<a.length; i++) {
    if (a[i] == a[i-1]) {
      count += 1;
      if (a[i] !== a[i+1]){
        output.push([a[i], count]);
        count = 1;
      }
    }
    if (a[i] !== a[i+1] && a[i] !== a[i-1]) {
      output.push([a[i], count]);
      count = 1;
    }
  }
  return output;
};
