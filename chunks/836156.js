t.d(n, { S: () => l, i: () => a });
let l = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?(\\?[^\\s]*)?$", "i");
function a(e) {
    return l.test(e);
}
