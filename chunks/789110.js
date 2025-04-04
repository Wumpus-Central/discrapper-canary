n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(626135),
    o = n(981631);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends r.Z {
    handleMessageCreate(e) {
        let { message: t } = e;
        this._trackIfSessionMetadataExists(t);
    }
    handleMessageUpdate(e) {
        let { message: t } = e;
        this._trackIfSessionMetadataExists(t);
    }
    _getAuthorizedApplicationIds(e) {
        try {
            return e.authorized_application_ids;
        } catch (e) {
            return null;
        }
    }
    _trackIfSessionMetadataExists(e) {
        if (null != e.session_metadata) {
            var t;
            i.default.track(o.rMx.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
                message_id: e.id,
                channel_id: e.channel_id,
                author_id: null == (t = e.author) ? void 0 : t.id,
                authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata)
            });
        }
    }
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
                MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e)
            });
    }
}
let l = new s();
