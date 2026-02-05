"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    a = n(764748);
class s extends i.Component {
    _ref = i.createRef();
    constructor(e) {
        super(e), (this.setRef = this.setRef.bind(this));
    }
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, r.jsx)(a.z, { ref: this.setRef, ...this.props });
    }
}
let o = s;
