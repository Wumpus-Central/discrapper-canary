r.d(t, { Z: () => N }), r(411104), r(47120);
var n = r(192379),
    A = r(399606),
    a = r(780384),
    o = r(570140),
    l = r(881052),
    i = r(141795),
    s = r(476326),
    c = r(983544),
    d = r(9874),
    u = r(710845),
    g = r(430824),
    f = r(277985),
    p = r(240864),
    h = r(863663),
    m = r(981631),
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
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
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
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
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
        if (this.uploads.length >= r) throw (a.uv.announce(b.NW.formatToPlainString(b.t['0QDZ4O'], { maxAttachmentsCount: r })), Error('Too many attachments'));
        e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new i.n(e, this.guildId);
        n.upload(),
            n.on('error', (r) => {
                var A;
                r === m.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let o = 'number' == typeof r && r > 0 ? -r : -1,
                    l = (0, h.kg)(o),
                    i = null == (A = e.file) ? void 0 : A.name;
                null != i
                    ? a.uv.announce(
                          b.NW.formatToPlainString(b.t['+YVkfX'], {
                              filename: i,
                              reason: l
                          })
                      )
                    : a.uv.announce(b.NW.formatToPlainString(b.t.mBkf6e, { reason: l })),
                    t((e) => q(C({}, e), { [n.id]: o }));
            }),
            n.on('progress', (e, r) => {
                t((t) => q(C({}, t), { [n.id]: e / r }));
            }),
            (this.uploads = [...this.uploads, n]);
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
        var { priceTier: r, createNewRole: n, imageName: A } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    A = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            A = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (A[r] = e[r]);
                        return A;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (A[r] = e[r]);
                }
                return A;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === i.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in a && (t = a.unlinkRole);
        let l = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            s = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id
                    };
                }),
            c = await this.createCloudUploader().uploadFiles(
                l,
                q(C({}, a), {
                    price_tier: r,
                    create_new_role: n,
                    image_name: A,
                    unlink_role: t,
                    attachments: s.length > 0 ? s : void 0
                }),
                { addFilesTo: 'attachments' }
            );
        return (
            x.log('Created/updated product:', c),
            null != c &&
                (this.isEdit
                    ? await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: c
                      })
                    : await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: c
                      })),
            c
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: r }) {
        var n;
        v(this, 'guildId', void 0),
            v(this, 'isEdit', void 0),
            v(this, 'target', new f.Z()),
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
        let A = null == t ? m.ANM.GUILD_PRODUCTS(e) : m.ANM.GUILD_PRODUCT_LISTINGS(e, t),
            a = null == t ? 'POST' : 'PATCH';
        (this.createCloudUploader = () => (0, d.F)(A, a)), (this.guildId = e), (this.onFileSizeError = r);
        let o = null == (n = p.Z.getGuildProduct(null != t ? t : '')) ? void 0 : n.attachments;
        null != o &&
            (this.uploads = o.map((t) => {
                var r;
                this.existingAttachmentIds.add(t.id);
                let n = new i.n(
                    {
                        id: t.id,
                        platform: s.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (r = t.size) ? r : 0
                        }
                    },
                    e
                );
                return (n.status = i.m.COMPLETED), n;
            }));
    }
}
function N(e, t) {
    var r;
    let { editSkuId: a, onFileSizeError: o } = t,
        i = (0, A.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, c] = n.useState({
            editSkuId: a,
            onFileSizeError: o
        }),
        d = n.useMemo(() => new j(C({ guildId: e }, s)), [e, s]),
        [u, f] = n.useState(d.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        f(d.generateInitialProgresses());
    }, [d]);
    let [h, b] = n.useState(),
        [v, q] = n.useState(),
        x = n.useCallback(
            (e) => {
                d.deleteAttachment(e) && p({});
            },
            [d]
        ),
        N = n.useCallback(
            (e) => {
                d.addAttachment(e, f), p({});
            },
            [d]
        ),
        O = n.useCallback(
            async (e) => {
                try {
                    b(e), q(void 0);
                    let t = await d.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            c({
                                editSkuId: t.id,
                                onFileSizeError: o
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
            [d, o]
        ),
        U = n.useCallback(() => {
            d.cancelUnusedUploads(), p({});
        }, [d]);
    n.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d]
    );
    let { uploads: P } = d,
        y = !P.every((e) => d.existingAttachmentIds.has(e.id)) || P.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: N,
        cancelUnusedUploads: U,
        deleteAttachment: x,
        fileUploadProgresses: u,
        uploads: P,
        saveProductWithAttachments: O,
        isSaving: null != h,
        changesSaving: h,
        saveError: v,
        hasUnsavedAttachmentChanges: y,
        canAttachFiles: P.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (r = null == i ? void 0 : i.hasFeature(m.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && r
    };
}
