function i(e, t, n) {
    let i = new n.constructor(n.toJS());
    return (i.position_ = t.order), null != t.nickname && (i.name = t.nickname), null != t.parentId && t.parentId in e && (i.parent_id = t.parentId), i;
}
n.d(t, { r: () => i });
