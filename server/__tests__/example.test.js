function soma(a, b) {
  return a * b;
}
test('se eu chamar ... deve retornar...', () => {
  const result = soma(4, 5);

  expect(result);
});
