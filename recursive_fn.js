let i = 0;

function recursiveFn() {
  i++;
  return recursiveFn();
}

try {
  recursiveFn();
} catch (e) {
  console.log(`i = ${i} error: ${e}`);
}