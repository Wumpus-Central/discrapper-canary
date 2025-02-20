function r(e, t, n) {
    let r = new n.constructor(n.toJS());
    return (r.position_ = t.order), null != t.nickname && (r.name = t.nickname), null != t.parentId && t.parentId in e && (r.parent_id = t.parentId), r;
}
n.d(t, { r: () => r });
