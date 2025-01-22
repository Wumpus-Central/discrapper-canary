var i = r(47120);
var a = r(633302);
let o = (e) => {
    let n = new Map();
    for (let i of e) {
        var r;
        if (null != i.id) {
            n.set(i.id, i);
            continue;
        }
        let e = null !== (r = a.ZP.convertSurrogateToBase(i.surrogates)) && void 0 !== r ? r : i;
        n.set(e.name, e);
    }
    return n;
};
n.Z = o;
