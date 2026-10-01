t.d(n, { S: () => l, i: () => r });
let l = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?(\\?[^\\s]*)?$", "i");
function r(e) {
    return l.test(e);
}
