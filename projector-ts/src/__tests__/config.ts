import config, { Operation } from "../config";

test("simple print all", function () {
  const cfg = config({});
  expect(cfg.operation).toEqual(Operation.Print);
  expect(cfg.args).toEqual([]);
});

test("print key", function () {
  const cfg = config({
    args: ["foo"],
  });
  expect(cfg.operation).toEqual(Operation.Print);
  expect(cfg.args).toEqual(["foo"]);
});

test("add key value", function () {
  const cfg = config({
    args: ["add", "foo", "bar"],
  });
  expect(cfg.operation).toEqual(Operation.Add);
  expect(cfg.args).toEqual(["foo", "bar"]);
});

test("rm key", function () {
  const cfg = config({
    args: ["rm", "foo"],
  });
  expect(cfg.operation).toEqual(Operation.Remove);
  expect(cfg.args).toEqual(["foo"]);
});
