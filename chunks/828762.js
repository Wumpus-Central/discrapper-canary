r.d(t, { Z: () => N }), r(411104), r(47120);
var A = r(192379),
    n = r(399606),
    o = r(780384),
    a = r(570140),
    l = r(881052),
    i = r(141795),
    s = r(476326),
    c = r(983544),
    d = r(9874),
    u = r(710845),
    f = r(430824),
    g = r(277985),
    p = r(240864),
    m = r(863663),
    h = r(981631),
    b = r(388032);
function v(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            A = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (A = A.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            A.forEach(function (t) {
                v(e, t, r[t]);
            });
    }
    return e;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var A = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, A);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let x = new u.Z('ProductAttachmentManager');
class j {
    addAttachment(e, t) {
        let r = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= r) throw (o.uv.announce(b.NW.formatToPlainString(b.t['0QDZ4O'], { maxAttachmentsCount: r })), Error('Too many attachments'));
        e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
        let A = new i.n(e, this.guildId);
        A.upload(),
            A.on('error', (r) => {
                var n;
                r === h.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = 'number' == typeof r && r > 0 ? -r : -1,
                    l = (0, m.kg)(a),
                    i = null === (n = e.file) || void 0 === n ? void 0 : n.name;
                null != i
                    ? o.uv.announce(
                          b.NW.formatToPlainString(b.t['+YVkfX'], {
                              filename: i,
                              reason: l
                          })
                      )
                    : o.uv.announce(b.NW.formatToPlainString(b.t.mBkf6e, { reason: l })),
                    t((e) => q(C({}, e), { [A.id]: a }));
            }),
            A.on('progress', (e, r) => {
                t((t) => q(C({}, t), { [A.id]: e / r }));
            }),
            (this.uploads = [...this.uploads, A]);
    }
    deleteAttachment(e) {
        let t = this.uploads.findIndex((t) => t.id === e);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let t;
        var { priceTier: r, createNewRole: A, imageName: n } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var r,
                    A,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            A,
                            n = {},
                            o = Object.keys(e);
                        for (A = 0; A < o.length; A++) (r = o[A]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                        return n;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (A = 0; A < o.length; A++) (r = o[A]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                }
                return n;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === i.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in o && (t = o.unlinkRole);
        let l = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            s = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null === (t = e.item.file) || void 0 === t ? void 0 : t.name,
                        id: e.id
                    };
                }),
            c = await this.createCloudUploader().uploadFiles(
                l,
                q(C({}, o), {
                    price_tier: r,
                    create_new_role: A,
                    image_name: n,
                    unlink_role: t,
                    attachments: s.length > 0 ? s : void 0
                }),
                { addFilesTo: 'attachments' }
            );
        return (
            x.log('Created/updated product:', c),
            null != c &&
                (this.isEdit
                    ? await a.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: c
                      })
                    : await a.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: c
                      })),
            c
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: r }) {
        var A;
        v(this, 'guildId', void 0),
            v(this, 'isEdit', void 0),
            v(this, 'target', new g.Z()),
            v(this, 'createCloudUploader', void 0),
            v(this, 'onFileSizeError', void 0),
            v(this, 'existingAttachmentIds', new Set()),
            v(this, 'uploads', []),
            v(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.isEdit = null != t);
        let n = null == t ? h.ANM.GUILD_PRODUCTS(e) : h.ANM.GUILD_PRODUCT_LISTINGS(e, t),
            o = null == t ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, d.F)(n, o)), (this.guildId = e), (this.onFileSizeError = r);
        let a = null === (A = p.Z.getGuildProduct(null != t ? t : '')) || void 0 === A ? void 0 : A.attachments;
        null != a &&
            (this.uploads = a.map((t) => {
                var r;
                this.existingAttachmentIds.add(t.id);
                let A = new i.n(
                    {
                        id: t.id,
                        platform: s.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null !== (r = t.size) && void 0 !== r ? r : 0
                        }
                    },
                    e
                );
                return (A.status = i.m.COMPLETED), A;
            }));
    }
}
function N(e, t) {
    var r;
    let { editSkuId: o, onFileSizeError: a } = t,
        i = (0, n.e7)([f.Z], () => f.Z.getGuild(e)),
        [s, c] = A.useState({
            editSkuId: o,
            onFileSizeError: a
        }),
        d = A.useMemo(() => new j(C({ guildId: e }, s)), [e, s]),
        [u, g] = A.useState(d.generateInitialProgresses),
        [, p] = A.useState(null);
    A.useLayoutEffect(() => {
        g(d.generateInitialProgresses());
    }, [d]);
    let [m, b] = A.useState(),
        [v, q] = A.useState(),
        x = A.useCallback(
            (e) => {
                d.deleteAttachment(e) && p({});
            },
            [d]
        ),
        N = A.useCallback(
            (e) => {
                d.addAttachment(e, g), p({});
            },
            [d]
        ),
        O = A.useCallback(
            async (e) => {
                try {
                    b(e), q(void 0);
                    let t = await d.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            c({
                                editSkuId: t.id,
                                onFileSizeError: a
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    q(
                        e instanceof l.Hx
                            ? e
                            : new l.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    b(void 0);
                }
            },
            [d, a]
        ),
        U = A.useCallback(() => {
            d.cancelUnusedUploads(), p({});
        }, [d]);
    A.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d]
    );
    let { uploads: P } = d,
        V = !P.every((e) => d.existingAttachmentIds.has(e.id)) || P.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: N,
        cancelUnusedUploads: U,
        deleteAttachment: x,
        fileUploadProgresses: u,
        uploads: P,
        saveProductWithAttachments: O,
        isSaving: null != m,
        changesSaving: m,
        saveError: v,
        hasUnsavedAttachmentChanges: V,
        canAttachFiles: P.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: null !== (r = null == i ? void 0 : i.hasFeature(h.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && void 0 !== r && r
    };
}
