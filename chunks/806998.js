var n = r(310958),
    i = r(181676),
    o = r(65183),
    a = o.List,
    u = o.Map,
    s = o.OrderedSet,
    c = o.Record,
    l = o.Repeat,
    f = s(),
    p = {
        parent: null,
        characterList: a(),
        data: u(),
        depth: 0,
        key: '',
        text: '',
        type: 'unstyled',
        children: a(),
        prevSibling: null,
        nextSibling: null
    },
    h = function (t, e) {
        return t.getStyle() === e.getStyle();
    },
    d = function (t, e) {
        return t.getEntity() === e.getEntity();
    },
    g = function (t) {
        if (!t) return t;
        var e = t.characterList,
            r = t.text;
        return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
    };
t.exports = (function (t) {
    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
        return t.call(this, g(e)) || this;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.getKey = function () {
            return this.get('key');
        }),
        (r.getType = function () {
            return this.get('type');
        }),
        (r.getText = function () {
            return this.get('text');
        }),
        (r.getCharacterList = function () {
            return this.get('characterList');
        }),
        (r.getLength = function () {
            return this.getText().length;
        }),
        (r.getDepth = function () {
            return this.get('depth');
        }),
        (r.getData = function () {
            return this.get('data');
        }),
        (r.getInlineStyleAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getStyle() : f;
        }),
        (r.getEntityAt = function (t) {
            var e = this.getCharacterList().get(t);
            return e ? e.getEntity() : null;
        }),
        (r.getChildKeys = function () {
            return this.get('children');
        }),
        (r.getParentKey = function () {
            return this.get('parent');
        }),
        (r.getPrevSiblingKey = function () {
            return this.get('prevSibling');
        }),
        (r.getNextSiblingKey = function () {
            return this.get('nextSibling');
        }),
        (r.findStyleRanges = function (t, e) {
            i(this.getCharacterList(), h, t, e);
        }),
        (r.findEntityRanges = function (t, e) {
            i(this.getCharacterList(), d, t, e);
        }),
        e
    );
})(c(p));
