let n = (e) => {
    var t, r;
    return "object" == typeof (t = e) && null != t && "window" in t && t.window === t
        ? e.document
        : i((r = e)) && 9 === r.nodeType
          ? e
          : (e?.ownerDocument ?? ("u" > typeof document ? document : void 0));
};
function i(e) {
    return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType;
}
r.d(
    t,
    {},
    {
        Ng: function (e) {
            return i(e) && 11 === e.nodeType && "host" in e;
        },
        TW: n,
        mD: (e) => {
            let t = n(e);
            return t?.defaultView ?? ("u" > typeof window ? window : void 0);
        },
    },
);
