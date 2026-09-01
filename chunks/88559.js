Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.MergingRefiner = t.Filter = void 0),
    (t.Filter = class {
        refine(e, t) {
            return t.filter((t) => this.isValid(e, t));
        }
    }),
    (t.MergingRefiner = class {
        refine(e, t) {
            if (t.length < 2) return t;
            let r = [],
                n = t[0],
                a = null;
            for (let i = 1; i < t.length; i++) {
                a = t[i];
                let s = e.text.substring(n.index + n.text.length, a.index);
                if (this.shouldMergeResults(s, n, a, e)) {
                    let t = n,
                        r = a,
                        i = this.mergeResults(s, t, r, e);
                    e.debug(() => {
                        console.log(`${this.constructor.name} merged ${t} and ${r} into ${i}`);
                    }),
                        (n = i);
                } else r.push(n), (n = a);
            }
            return null != n && r.push(n), r;
        }
    });
