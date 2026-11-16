var yt = Array.isArray, gr = Array.prototype.indexOf, ht = Array.prototype.includes, Et = Array.from, Ln = Object.defineProperty, et = Object.getOwnPropertyDescriptor, br = Object.getOwnPropertyDescriptors, wr = Object.prototype, yr = Array.prototype, Cn = Object.getPrototypeOf, fn = Object.isExtensible;
const Er = () => {
};
function Or(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Tn() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
const H = 2, at = 4, Ot = 8, Sn = 1 << 24, oe = 16, re = 32, me = 64, jt = 128, Wt = 256, ne = 512, U = 1024, F = 2048, ce = 4096, B = 8192, W = 16384, Ze = 32768, Dt = 1 << 25, Ve = 65536, vt = 1 << 17, Ar = 1 << 18, We = 1 << 19, Lr = 1 << 20, _e = 1 << 25, Ne = 65536, pt = 1 << 21, Be = 1 << 22, Ee = 1 << 23, tt =                 Symbol("$state"), kn =                 Symbol("component"), Cr =                 Symbol(""), Rn =                 Symbol("attributes"), Tr =                 Symbol("class"), Sr =                 Symbol("style"), Pt =                 Symbol("text"), ot = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), kr = 1, Rr = 2, Nr = 16, Ir = 2, P =                 Symbol("uninitialized"), xr = "http://www.w3.org/1999/xhtml";
function jr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Dr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Pr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Nn(e) {
  return e === this.v;
}
function zr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function In(e) {
  return !zr(e, this.v);
}
function Ur(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Fr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Mr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Hr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Br() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Gr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Kr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let V = null;
function Ge(e) {
  V = e;
}
function Qt(e, t = !1, n) {
  V = {
    p: V,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
                           
      k
    ),
    l: null
  };
}
function Xt(e) {
  var t = (
                                   
    V
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Jn(r);
  }
  return t.i = !0, V = t.p, xn(e);
}
function xn(e = {}) {
  return Ln(e, kn, { value: !0 }), e;
}
function jn() {
  return !0;
}
let Ce = [];
function Dn() {
  var e = Ce;
  Ce = [], Or(e);
}
function Te(e) {
  if (Ce.length === 0 && !nt) {
    var t = Ce;
    queueMicrotask(() => {
      t === Ce && Dn();
    });
  }
  Ce.push(e);
}
function Wr() {
  for (; Ce.length > 0; )
    Dn();
}
const Qr = -7169;
function j(e, t) {
  e.f = e.f & Qr | t;
}
function Jt(e) {
  (e.f & ne) !== 0 || e.deps === null ? j(e, U) : j(e, ce);
}
function Pn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & H) === 0 || (t.f & Ne) === 0 || (t.f ^= Ne, Pn(
                              
        t.deps
      ));
}
function zn(e, t, n) {
  (e.f & F) !== 0 ? t.add(e) : (e.f & ce) !== 0 && n.add(e), Pn(e.deps), j(e, U);
}
function At(e) {
  var t = C, n = k;
  ae(null), he(null);
  try {
    return e();
  } finally {
    ae(t), he(n);
  }
}
function Xr(e, t, n, r) {
  const a = $t;
  var i = e.filter((f) => !f.settled), o = t.map(a);
  if (n.length === 0 && i.length === 0) {
    r(o);
    return;
  }
  var c = (
                         
    k
  ), l = Jr(), s = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((f) => f.promise)) : null;
  function v(f) {
    if ((c.f & W) === 0) {
      l();
      try {
        r([...o, ...f]);
      } catch (u) {
        fe(u, c);
      }
      _t();
    }
  }
  var p = Un();
  if (n.length === 0) {
    s.then(() => v([])).finally(p);
    return;
  }
  function _() {
    Promise.all(n.map((f) =>                 $r(f))).then(v).catch((f) => fe(f, c)).finally(p);
  }
  s ? s.then(() => {
    l(), _(), _t();
  }) : _();
}
function Jr() {
  var e = (
                         
    k
  ), t = C, n = V, r = (
                        
    S
  );
  return function(i = !0) {
    he(e), ae(t), Ge(n), i && (e.f & W) === 0 && (r?.activate(), r?.apply());
  };
}
function _t(e = !0) {
  he(null), ae(null), Ge(null), e && S?.deactivate();
}
function Un() {
  var e = (
                         
    k
  ), t = e.b, n = (
                        
    S
  ), r = !!t?.is_rendered();
  return t?.update_pending_count(1, n), n.increment(r, e), () => {
    t?.update_pending_count(-1, n), n.decrement(r, e);
  };
}
                       
function $t(e) {
  var t = H | F;
  return k !== null && (k.f |= We), {
    ctx: V,
    deps: null,
    effects: null,
    equals: Nn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
                      
      P
    ),
    wv: 0,
    parent: k,
    ac: null
  };
}
const Xe =                 Symbol("obsolete");
                       
function $r(e, t, n) {
  let r = (
                                
    k
  );
  r === null && Fr();
  var a = (
                             
                          
    void 0
  ), i = Ie(
                    
    P
  ), o = !C, c =                 new Set();
  return _a(() => {
    var l = (
                           
      k
    ), s = Tn();
    a = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, (f) => {
        f !== ot && s.reject(f);
      }).finally(_t);
    } catch (f) {
      s.reject(f), _t();
    }
    var v = (
                          
      S
    );
    if (o) {
      if ((l.f & Ze) !== 0)
        var p = Un();
      if (
                                                                                                                         
        r.b?.is_rendered()
      )
        v.async_deriveds.get(l)?.reject(Xe);
      else
        for (const f of c.values())
          f.reject(Xe);
      c.add(s), v.async_deriveds.set(l, s);
    }
    const _ = (f, u = void 0) => {
      p?.(), c.delete(s), u !== Xe && (v.activate(), u ? (i.f |= Ee, Ke(i, u)) : ((i.f & Ee) !== 0 && (i.f ^= Ee), Ke(i, f)), v.deactivate());
    };
    s.promise.then(_, (f) => _(null, f || "unknown"));
  }), Xn(() => {
    for (const l of c)
      l.reject(Xe);
  }), new Promise((l) => {
    function s(v) {
      function p() {
        v === a ? l(i) : s(a);
      }
      v.then(p, p);
    }
    s(a);
  });
}
                       
function zt(e) {
  const t =                 $t(e);
  return rr(t), t;
}
                       
function ea(e) {
  const t =                 $t(e);
  return t.equals = In, t;
}
function ta(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Y(
                             
        t[n]
      );
  }
}
function en(e) {
  var t, n = k, r = e.parent;
  if (!Ae && r !== null && e.v !== P &&                                                                                                      
  (r.f & (W | B)) !== 0)
    return jr(), e.v;
  he(r);
  try {
    e.f &= ~Ne, ta(e), t = lr(e);
  } finally {
    he(n);
  }
  return t;
}
function Fn(e) {
  var t = en(e);
  if (!e.equals(t) && (e.wv = ir(), (!S?.is_fork || e.deps === null) && (S !== null ? (S.capture(e, t, !0), Ut?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    j(e, U);
    return;
  }
  Ae || (le !== null ? (an() || S?.is_fork) && le.set(e, t) : Jt(e));
}
function na(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && At(() => {
        t.ac.abort(ot), t.ac = null;
      }), t.fn !== null && (t.teardown = Er), it(t, 0), ln(t));
}
function Mn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && qe(t);
}
let Tt = null, xe = null, S = null, Ut = null, le = null, Ft = null, nt = !1, St = !1, ze = null, ut = null;
var un = 0;
let ra = 1;
class Oe {
  id = ra++;
                                              
  #t = !1;
  linked = !0;
                             
  #o = null;
                             
  #e = null;
                                                              
  async_deriveds =                 new Map();
     
                                                                      
                                                                                                                            
                                                            
                                       
     
  current =                 new Map();
     
                                                                                                                       
                                                           
                            
     
  previous =                 new Map();
     
                                                                                         
                                                                                       
                                        
     
  #s =                 new Set();
     
                                                                                     
                                        
     
  #r =                 new Set();
     
                                                             
     
  #i = 0;
     
                                                                                
                                
     
  #n =                 new Map();
     
                                                                                
                                                                         
                                                                                                                 
     
  #l = null;
     
                                             
                     
     
  #a = [];
     
                                                 
                     
     
  #p = [];
     
                                                                               
                        
     
  #c =                 new Set();
     
                                          
                        
     
  #f =                 new Set();
     
                                                                              
                                                        
                                                                                     
                                                       
                                                      
     
  #d =                 new Map();
     
                                                                                                    
                        
     
  #_ =                 new Set();
  is_fork = !1;
  #u = !1;
  constructor() {
    xe === null ? Tt = xe = this : (xe.#e = this, this.#o = xe), xe = this;
  }
  #b() {
    if (this.is_fork) return !0;
    for (const r of this.#n.keys()) {
      for (var t = r, n = !1; t.parent !== null; ) {
        if (this.#d.has(t)) {
          n = !0;
          break;
        }
        t = t.parent;
      }
      if (!n)
        return !0;
    }
    return !1;
  }
     
                                                                      
                           
     
  skip_effect(t) {
    this.#d.has(t) || this.#d.set(t, { d: [], m: [] }), this.#_.delete(t);
  }
     
                                                                   
                                                
                           
                                          
     
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#d.get(t);
    if (r) {
      this.#d.delete(t);
      for (var a of r.d)
        j(a, F), n(a);
      for (a of r.m)
        j(a, ce), n(a);
    }
    this.#_.add(t);
  }
  #m() {
    this.#t = !0, un++ > 1e3 && (this.#v(), ia());
    for (const l of this.#c)
      this.#f.delete(l), j(l, F), this.schedule(l);
    for (const l of this.#f)
      j(l, ce), this.schedule(l);
    const t = this.#a;
    this.#a = [], this.apply();
    var n = ze = [], r = [], a = ut = [];
    for (const l of t)
      try {
        this.#y(l, n, r);
      } catch (s) {
        throw Vn(l), this.#b() || this.discard(), s;
      }
    if (S = null, a.length > 0) {
      var i = Oe.ensure();
      for (const l of a)
        i.schedule(l);
    }
    if (ze = null, ut = null, this.#b()) {
      this.#h(r), this.#h(n);
      for (const [l, s] of this.#d)
        Bn(l, s);
      a.length > 0 &&                       
      S.#m();
      return;
    }
    const o = this.#w();
    if (o) {
      this.#h(r), this.#h(n), o.#E(this);
      return;
    }
    this.#c.clear(), this.#f.clear();
    for (const l of this.#s) l(this);
    this.#s.clear(), Ut = this, dn(r), dn(n), Ut = null, this.#l?.resolve();
    var c = (
                                 
                            
      S
    );
    if (this.#i === 0 && (this.#a.length === 0 || c !== null) && this.#v(), this.#a.length > 0)
      if (c !== null) {
        const l = c;
        l.#a.push(...this.#a.filter((s) => !l.#a.includes(s)));
      } else
        c = this;
    c !== null && (ue.clear(), c.#m());
  }
     
                                                            
                                            
                         
                              
                                     
     
  #y(t, n, r) {
    t.f ^= U;
    for (var a = t.first; a !== null; ) {
      var i = a.f, o = (i & (re | me)) !== 0, c = o && (i & U) !== 0, l = c || (i & B) !== 0 || this.#d.has(a);
      if (!l && a.fn !== null) {
        o ? a.f ^= U : (i & at) !== 0 ? n.push(a) : lt(a) && ((i & oe) !== 0 && this.#f.add(a), qe(a));
        var s = a.first;
        if (s !== null) {
          a = s;
          continue;
        }
      }
      for (; a !== null; ) {
        var v = a.next;
        if (v !== null) {
          a = v;
          break;
        }
        a = a.parent;
      }
    }
  }
  #w() {
    for (var t = this.#o; t !== null; ) {
      if (!t.is_fork) {
        for (const [n, [, r]] of this.current)
          if (t.current.has(n) && !r)
            return t;
      }
      t = t.#o;
    }
    return null;
  }
     
                         
     
  #E(t) {
    for (const [r, a] of t.current)
      !this.previous.has(r) && t.previous.has(r) && this.previous.set(r, t.previous.get(r)), this.current.set(r, a);
    for (const [r, a] of t.async_deriveds) {
      const i = this.async_deriveds.get(r);
      i && a.promise.then(i.resolve).catch(i.reject);
    }
    t.async_deriveds.clear(), this.transfer_effects(t.#c, t.#f);
    const n = (r) => {
      var a = r.reactions;
      if (a !== null && !((r.f & H) !== 0 && (r.f & (F | ce)) === 0))
        for (const c of a) {
          var i = c.f;
          if ((i & H) !== 0)
            n(
                                    
              c
            );
          else {
            var o = (
                                   
              c
            );
            i & (Be | oe) && !this.async_deriveds.has(o) && (this.#f.delete(o), j(o, F), this.schedule(o));
          }
        }
    };
    for (const r of this.current.keys())
      n(r);
    this.oncommit(() => t.discard()), t.#v(), S = this, this.#m();
  }
     
                              
     
  #h(t) {
    for (var n = 0; n < t.length; n += 1)
      zn(t[n], this.#c, this.#f);
  }
     
                                                          
                                                  
                          
                       
                                  
     
  capture(t, n, r = !1) {
    t.v !== P && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ee) === 0 && (this.current.set(t, [n, r]), le?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, le = null;
  }
  flush() {
    try {
      St = !0, S = this, this.#m();
    } finally {
      un = 0, Ft = null, ze = null, ut = null, St = !1, S = null, le = null, ue.clear();
    }
  }
  discard() {
    for (const t of this.#r) t(this);
    this.#r.clear();
    for (const t of this.async_deriveds.values())
      t.reject(Xe);
    this.#v(), this.#l?.resolve();
  }
     
                           
     
  register_created_effect(t) {
    this.#p.push(t);
  }
  #g() {
    for (let p = Tt; p !== null; p = p.#e) {
      var t = p.id < this.id, n = [];
      for (const [_, [f, u]] of this.current) {
        if (p.current.has(_)) {
          var r = (
                                         
            p.current.get(_)[0]
          );
          if (t && f !== r)
            p.current.set(_, [f, u]);
          else
            continue;
        }
        n.push(_);
      }
      if (t)
        for (const [_, f] of this.async_deriveds) {
          const u = p.async_deriveds.get(_);
          u && f.promise.then(u.resolve).catch(u.reject);
        }
      var a = [...p.current.keys()].filter(
        (_) => !                             
        p.current.get(_)[1]
      );
      if (!(!p.#t || a.length === 0)) {
        var i = a.filter((_) => !this.current.has(_));
        if (i.length === 0)
          t && p.discard();
        else if (n.length > 0) {
          if (t)
            for (const _ of this.#_)
              p.unskip_effect(_, (f) => {
                (f.f & (oe | Be)) !== 0 ? p.schedule(f) : p.#h([f]);
              });
          p.activate();
          var o =                 new Set(), c =                 new Map();
          for (var l of n)
            Hn(l, i, o, c);
          c =                 new Map();
          var s = [...p.current].filter(([_, f]) => {
            const u = this.current.get(_);
            return u ? u[0] !== f[0] || u[1] !== f[1] : !0;
          }).map(([_]) => _);
          if (s.length > 0)
            for (const _ of this.#p)
              (_.f & (W | B | vt)) === 0 && tn(_, s, c) && ((_.f & (Be | oe)) !== 0 ? (j(_, F), p.schedule(_)) : p.#c.add(_));
          if (p.#a.length > 0 && !p.#u) {
            p.apply();
            for (var v of p.#a)
              p.#y(v, [], []);
            p.#a = [];
          }
          p.deactivate();
        }
      }
    }
  }
     
                              
                           
     
  increment(t, n) {
    if (this.#i += 1, t) {
      let r = this.#n.get(n) ?? 0;
      this.#n.set(n, r + 1);
    }
  }
     
                              
                           
     
  decrement(t, n) {
    if (this.#i -= 1, t) {
      let r = this.#n.get(n) ?? 0;
      r === 1 ? this.#n.delete(n) : this.#n.set(n, r - 1);
    }
    this.#u || (this.#u = !0, Te(() => {
      this.#u = !1, this.linked && this.flush();
    }));
  }
     
                                       
                                             
     
  transfer_effects(t, n) {
    for (const r of t)
      this.#c.add(r);
    for (const r of n)
      this.#f.add(r);
    t.clear(), n.clear();
  }
                                           
  oncommit(t) {
    this.#s.add(t);
  }
                                           
  ondiscard(t) {
    this.#r.add(t);
  }
  settled() {
    return (this.#l ??= Tn()).promise;
  }
  static ensure() {
    if (S === null) {
      const t = S = new Oe();
      !St && !nt && Te(() => {
        t.#t || t.flush();
      });
    }
    return S;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
     
    
                           
     
  schedule(t) {
    if (Ft = t, t.b?.is_pending && (t.f & (at | Ot | Sn)) !== 0 && (t.f & Ze) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (ze !== null && n === k && (C === null || (C.f & H) === 0))
        return;
      if ((r & (me | re)) !== 0) {
        if ((r & U) === 0)
          return;
        n.f ^= U;
      }
    }
    this.#a.push(n);
  }
  #v() {
    if (this.linked) {
      var t = this.#o, n = this.#e;
      t === null ? Tt = n : t.#e = n, n === null ? xe = t : n.#o = t, this.linked = !1;
    }
  }
}
function aa(e) {
  var t = nt;
  nt = !0;
  try {
    for (var n; ; ) {
      if (Wr(), S === null)
        return (
                          
          n
        );
      S.flush();
    }
  } finally {
    nt = t;
  }
}
function ia() {
  try {
    Gr();
  } catch (e) {
    fe(e, Ft);
  }
}
let pe = null;
function dn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (W | B)) === 0 && lt(r) && (pe =                 new Set(), qe(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && er(r), pe?.size > 0)) {
        ue.clear();
        for (const a of pe) {
          if ((a.f & (W | B)) !== 0) continue;
          const i = [a];
          let o = a.parent;
          for (; o !== null; )
            pe.has(o) && (pe.delete(o), i.push(o)), o = o.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            (l.f & (W | B)) === 0 && qe(l);
          }
        }
        pe.clear();
      }
    }
    pe = null;
  }
}
function Hn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & H) !== 0 ? Hn(
                              
        a,
        t,
        n,
        r
      ) : (i & (Be | oe)) !== 0 && (i & F) === 0 && tn(a, t, r) && (j(a, F), nn(
                             
        a
      ));
    }
}
function tn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (ht.call(t, a))
        return !0;
      if ((a.f & H) !== 0 && tn(
                              
        a,
        t,
        n
      ))
        return n.set(
                                
          a,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function nn(e) {
  S.schedule(e);
}
function Bn(e, t) {
  if (!((e.f & re) !== 0 && (e.f & U) !== 0)) {
    (e.f & F) !== 0 ? t.d.push(e) : (e.f & ce) !== 0 && t.m.push(e), j(e, U);
    for (var n = e.first; n !== null; )
      Bn(n, t), n = n.next;
  }
}
function Vn(e) {
  j(e, U);
  for (var t = e.first; t !== null; )
    Vn(t), t = t.next;
}
let mt =                 new Set();
const ue =                 new Map();
let Gn = !1;
function Ie(e, t) {
  var n = {
    f: 0,
                                                                            
    v: e,
    reactions: null,
    equals: Nn,
    rv: 0,
    wv: 0
  };
  return n;
}
                       
function ve(e, t) {
  const n = Ie(e);
  return rr(n), n;
}
                       
function oa(e, t = !1, n = !0) {
  const r = Ie(e);
  return t || (r.equals = In), r;
}
function ye(e, t, n = !1) {
  C !== null &&                                                                                         
                                                                
  (!se || (C.f & vt) !== 0) && jn() && (C.f & (H | oe | Be | vt)) !== 0 && (de === null || !de.has(e)) && qr();
  let r = n ? Ue(t) : t;
  return Ke(e, r, ut);
}
function Ke(e, t, n = null) {
  if (!e.equals(t)) {
    Ae ? ue.set(e, t) : ue.has(e) || ue.set(e, e.v);
    var r = Oe.ensure();
    if (r.capture(e, t), (e.f & H) !== 0) {
      const a = (
                              
        e
      );
      (e.f & F) !== 0 && en(a), le === null && Jt(a);
    }
    e.wv = ir(), Kn(e, F, n), k !== null && (k.f & U) !== 0 && (k.f & (re | me)) === 0 && (X === null ? wa([e]) : X.push(e)), !r.is_fork && mt.size > 0 && !Gn && la();
  }
  return t;
}
function la() {
  Gn = !1;
  for (const e of mt) {
    (e.f & U) !== 0 && j(e, ce);
    let t;
    try {
      t = lt(e);
    } catch {
      t = !0;
    }
    t && qe(e);
  }
  mt.clear();
}
function rt(e) {
  ye(e, e.v + 1);
}
function Kn(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var a = r.length, i = 0; i < a; i++) {
      var o = r[i], c = o.f, l = (c & F) === 0;
      if (l && j(o, t), (c & vt) !== 0)
        mt.add(
                               
          o
        );
      else if ((c & H) !== 0) {
        var s = (
                                
          o
        );
        le?.delete(s), (c & Ne) === 0 && (c & ne && (k === null || (k.f & pt) === 0) && (o.f |= Ne), Kn(s, ce, n));
      } else if (l) {
        var v = (
                               
          o
        );
        (c & oe) !== 0 && pe !== null && pe.add(v), n !== null ? n.push(v) : nn(v);
      }
    }
}
function Ue(e) {
  if (typeof e != "object" || e === null || tt in e || kn in e)
    return e;
  const t = Cn(e);
  if (t !== wr && t !== yr)
    return e;
  var n =                 new Map(), r = yt(e), a =                 ve(0), i = Re, o = (c) => {
    if (Re === i)
      return c();
    var l = C, s = Re;
    ae(null), _n(i);
    var v = c();
    return ae(l), _n(s), v;
  };
  return r && n.set("length",                 ve(
                        
    e.length
  )), new Proxy(
                      
    e,
    {
      defineProperty(c, l, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && Kr();
        var v = n.get(l);
        return v === void 0 ? o(() => {
          var p =                 ve(s.value);
          return n.set(l, p), p;
        }) : ye(v, s.value, !0), !0;
      },
      deleteProperty(c, l) {
        var s = n.get(l);
        if (s === void 0) {
          if (l in c) {
            const v = o(() =>                 ve(P));
            n.set(l, v), rt(a);
          }
        } else
          ye(s, P), rt(a);
        return !0;
      },
      get(c, l, s) {
        if (l === tt)
          return e;
        var v = n.get(l), p = l in c;
        if (v === void 0 && (!p || et(c, l)?.writable) && (v = o(() => {
          var f = Ue(p ? c[l] : P), u =                 ve(f);
          return u;
        }), n.set(l, v)), v !== void 0) {
          var _ = R(v);
          return _ === P ? void 0 : _;
        }
        return Reflect.get(c, l, s);
      },
      getOwnPropertyDescriptor(c, l) {
        var s = Reflect.getOwnPropertyDescriptor(c, l);
        if (s && "value" in s) {
          var v = n.get(l);
          v && (s.value = R(v));
        } else if (s === void 0) {
          var p = n.get(l), _ = p?.v;
          if (p !== void 0 && _ !== P)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return s;
      },
      has(c, l) {
        if (l === tt)
          return !0;
        var s = n.get(l), v = s !== void 0 && s.v !== P || Reflect.has(c, l);
        if (s !== void 0 || k !== null && (!v || et(c, l)?.writable)) {
          s === void 0 && (s = o(() => {
            var _ = v ? Ue(c[l]) : P, f =                 ve(_);
            return f;
          }), n.set(l, s));
          var p = R(s);
          if (p === P)
            return !1;
        }
        return v;
      },
      set(c, l, s, v) {
        var p = n.get(l), _ = l in c;
        if (r && l === "length")
          for (var f = s; f <                              
          p.v; f += 1) {
            var u = n.get(f + "");
            u !== void 0 ? ye(u, P) : f in c && (u = o(() =>                 ve(P)), n.set(f + "", u));
          }
        if (p === void 0)
          (!_ || et(c, l)?.writable) && (p = o(() =>                 ve(void 0)), ye(p, Ue(s)), n.set(l, p));
        else {
          _ = p.v !== P;
          var E = o(() => Ue(s));
          ye(p, E);
        }
        var A = Reflect.getOwnPropertyDescriptor(c, l);
        if (A?.set && A.set.call(v, s), !_) {
          if (r && typeof l == "string") {
            var d = (
                                           
              n.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h >= d.v && ye(d, h + 1);
          }
          rt(a);
        }
        return !0;
      },
      ownKeys(c) {
        R(a);
        var l = Reflect.ownKeys(c).filter((p) => {
          var _ = n.get(p);
          return _ === void 0 || _.v !== P;
        });
        for (var [s, v] of n)
          v.v !== P && !(s in c) && l.push(s);
        return l;
      },
      setPrototypeOf() {
        Yr();
      }
    }
  );
}
function hn(e) {
  try {
    if (e !== null && typeof e == "object" && tt in e)
      return e[tt];
  } catch {
  }
  return e;
}
function Yn(e, t) {
  return Object.is(hn(e), hn(t));
}
var vn, qn, Zn, Wn;
function sa() {
  if (vn === void 0) {
    vn = window, qn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Zn = et(t, "firstChild").get, Wn = et(t, "nextSibling").get, fn(e) && (e[Tr] = void 0, e[Rn] = null, e[Sr] = void 0, e.__e = void 0), fn(n) && (n[Pt] = void 0);
  }
}
function Ye(e = "") {
  return document.createTextNode(e);
}
                       
function rn(e) {
  return (
                                      
    Zn.call(e)
  );
}
                       
function Lt(e) {
  return (
                                      
    Wn.call(e)
  );
}
function Fe(e, t) {
  return                 rn(e);
}
function $(e, t = !1) {
  return                 rn(e);
}
function ie(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r =                            
                    Lt(r);
  return r;
}
function ca(e) {
  e.textContent = "";
}
function Qn() {
  return !1;
}
function fa(e, t, n) {
  return (
                                                                                             
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function ua(e) {
  var t = k;
  if (t === null)
    return C.f |= Ee, e;
  if ((t.f & Ze) === 0 && (t.f & at) === 0)
    throw e;
  fe(e, t);
}
function fe(e, t) {
  if (!(t !== null && (t.f & W) !== 0)) {
    for (; t !== null; ) {
      if ((t.f & jt) !== 0 && (t.f & (W | Dt)) === 0) {
        if ((t.f & Ze) === 0)
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function da(e) {
  k === null && (C === null && Vr(), Br()), Ae && Hr();
}
function ha(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Le(e, t) {
  var n = k;
  n !== null && (n.f & B) !== 0 && (e |= B);
  var r = {
    ctx: V,
    deps: null,
    nodes: null,
    f: e | F | ne,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  S?.register_created_effect(r);
  var a = r;
  if ((e & at) !== 0)
    ze !== null ? ze.push(r) : Oe.ensure().schedule(r);
  else if (t !== null) {
    try {
      qe(r);
    } catch (o) {
      throw Y(r), o;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last &&                                      
    (a.f & We) === 0 && (a = a.first, (e & oe) !== 0 && (e & Ve) !== 0 && a !== null && (a.f |= Ve));
  }
  if (a !== null && (a.parent = n, n !== null && ha(a, n), C !== null && (C.f & H) !== 0 && (e & me) === 0)) {
    var i = (
                            
      C
    );
    (i.effects ??= []).push(a);
  }
  return r;
}
function an() {
  return C !== null && !se;
}
function Xn(e) {
  const t = Le(Ot, null);
  return j(t, U), t.teardown = e, t;
}
function va(e) {
  da();
  var t = (
                         
    k.f
  ), n = !C && (t & re) !== 0 && V !== null && !V.i;
  if (n) {
    var r = (
                                     
      V
    );
    (r.e ??= []).push(e);
  } else
    return Jn(e);
}
function Jn(e) {
  return Le(at | Lr, e);
}
function pa(e) {
  Oe.ensure();
  const t = Le(me | We, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? ke(t, () => {
      Y(t), r(void 0);
    }) : (Y(t), r(void 0));
  });
}
function _a(e) {
  return Le(Be | We, e);
}
function ma(e, t = 0) {
  return Le(Ot | t, e);
}
function je(e, t = [], n = [], r = []) {
  Xr(r, t, n, (a) => {
    Le(Ot, () => {
      e(...a.map(R));
    });
  });
}
function on(e, t = 0) {
  var n = Le(oe | t, e);
  return n;
}
function ee(e) {
  return Le(re | We, e);
}
function $n(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ae, r = C;
    pn(!0), ae(null);
    try {
      t.call(null);
    } catch (a) {
      fe(a, e.parent);
    } finally {
      pn(n), ae(r);
    }
  }
}
function ln(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && At(() => {
      a.abort(ot);
    });
    var r = n.next;
    (n.f & me) !== 0 ? n.parent = null : Y(n, t), n = r;
  }
}
function ga(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & re) === 0 && Y(t), t = n;
  }
}
function Y(e, t = !0) {
  var n = !1;
  (t || (e.f & Ar) !== 0) && e.nodes !== null && e.nodes.end !== null && (ba(
    e.nodes.start,
                               
    e.nodes.end
  ), n = !0), e.f |= Dt, ln(e, t && !n), it(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  $n(e), e.f ^= Dt, e.f |= W;
  var a = e.parent;
  a !== null && a.first !== null && er(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ba(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null :                 Lt(e);
    e.remove(), e = n;
  }
}
function er(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ke(e, t, n = !0) {
  var r = [];
  e.f |= Wt, tr(e, r, !0);
  var a = () => {
    n && Y(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var o = () => --i || a();
    for (var c of r)
      c.out(o);
  } else
    a();
}
function tr(e, t, n) {
  if ((e.f & B) === 0) {
    e.f ^= B;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const c of r)
        (c.is_global || n) && t.push(c);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & me) === 0) {
        var o = (a.f & Ve) !== 0 ||                                                             
                                                                     
                                                                         
        (a.f & re) !== 0 && (e.f & oe) !== 0;
        tr(a, t, o ? n : !1);
      }
      a = i;
    }
  }
}
function gt(e) {
  e.f &= ~Wt, nr(e, !0);
}
function nr(e, t) {
  if ((e.f & Wt) === 0 && (e.f & B) !== 0) {
    e.f ^= B, (e.f & U) === 0 && (j(e, F), Oe.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & Ve) !== 0 || (n.f & re) !== 0;
      nr(n, a ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || t) && o.in();
  }
}
function sn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var a = n === r ? null :                 Lt(n);
      t.append(n), n = a;
    }
}
let dt = !1, Ae = !1;
function pn(e) {
  Ae = e;
}
let C = null, se = !1;
function ae(e) {
  C = e;
}
let k = null;
function he(e) {
  k = e;
}
let de = null;
function rr(e) {
  C !== null && (de ??=                 new Set()).add(e);
}
let K = null, Z = 0, X = null;
function wa(e) {
  X = e;
}
let ar = 1, Se = 0, Re = Se;
function _n(e) {
  Re = e;
}
function ir() {
  return ++ar;
}
function lt(e) {
  var t = e.f;
  if ((t & F) !== 0)
    return !0;
  if (t & H && (e.f &= ~Ne), (t & ce) !== 0) {
    for (var n = (
                            
      e.deps
    ), r = n.length, a = 0; a < r; a++) {
      var i = n[a];
      if (lt(
                              
        i
      ) && Fn(
                              
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ne) !== 0 &&                                                                   
                                                                
    le === null && j(e, U);
  }
  return !1;
}
function or(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(de !== null && de.has(e)))
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      (i.f & H) !== 0 ? or(
                              
        i,
        t,
        !1
      ) : t === i && (n ? j(i, F) : (i.f & U) !== 0 && j(i, ce), nn(
                             
        i
      ));
    }
}
function lr(e) {
  var t = K, n = Z, r = X, a = C, i = de, o = V, c = se, l = Re, s = e.f;
  K =                              
  null, Z = 0, X = null, C = (s & (re | me)) === 0 ? e : null, de = null, Ge(e.ctx), se = !1, Re = ++Se, e.ac !== null && (At(() => {
    e.ac.abort(ot);
  }), e.ac = null);
  try {
    e.f |= pt;
    var v = (
                             
      e.fn
    ), p = v();
    e.f |= Ze;
    var _ = mn(e);
    if (jn() && X !== null && !se && _ !== null && (e.f & (H | ce | F)) === 0)
      for (var f = 0; f <                        
      X.length; f++)
        or(
          X[f],
                               
          e
        );
    if (a !== null && a !== e) {
      if (Se++, a.deps !== null)
        for (let u = 0; u < n; u += 1)
          a.deps[u].rv = Se;
      if (t !== null)
        for (const u of t)
          u.rv = Se;
      X !== null && (r === null ? r = X : r.push(...                       
      X));
    }
    return (e.f & Ee) !== 0 && (e.f ^= Ee), p;
  } catch (u) {
    return mn(e), ua(u);
  } finally {
    e.f ^= pt, K = t, Z = n, X = r, C = a, de = i, Ge(o), se = c, Re = l;
  }
}
function mn(e) {
  var t = e.deps, n = S?.is_fork;
  if (K !== null) {
    var r;
    if (n || it(e, Z), t !== null && Z > 0)
      for (t.length = Z + K.length, r = 0; r < K.length; r++)
        t[Z + r] = K[r];
    else
      e.deps = t = K;
    if (an() && (e.f & ne) !== 0)
      for (r = Z; r < t.length; r++)
        (t[r].reactions ??= []).push(e);
  } else !n && t !== null && Z < t.length && (it(e, Z), t.length = Z);
  return t;
}
function ya(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = gr.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  if (n === null && (t.f & H) !== 0 &&                                                                                             
                                                                                                
                                                                                          
  (K === null || !ht.call(K, t))) {
    var i = (
                            
      t
    );
    (i.f & ne) !== 0 && (i.f ^= ne, i.f &= ~Ne), i.v !== P && Jt(i), i.ac !== null && At(() => {
      i.ac.abort(ot), i.ac = null, j(i, F);
    }), na(i), it(i, 0);
  }
}
function it(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ya(e, n[r]);
}
function qe(e) {
  var t = e.f;
  if ((t & W) === 0) {
    j(e, U);
    var n = k, r = dt;
    k = e, dt = (t & (re | me)) === 0;
    try {
      (t & (oe | Sn)) !== 0 ? ga(e) : ln(e), $n(e);
      var a = lr(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ar;
      var i;
    } finally {
      dt = r, k = n;
    }
  }
}
function R(e) {
  var t = e.f, n = (t & H) !== 0;
  if (C !== null && !se) {
    var r = k !== null && (k.f & W) !== 0;
    if (!r && (de === null || !de.has(e))) {
      var a = C.deps;
      if ((C.f & pt) !== 0)
        e.rv < Se && (e.rv = Se, K === null && a !== null && a[Z] === e ? Z++ : K === null ? K = [e] : K.push(e));
      else {
        C.deps ??= [], ht.call(C.deps, e) || C.deps.push(e);
        var i = e.reactions;
        i === null ? e.reactions = [C] : ht.call(i, C) || i.push(C);
      }
    }
  }
  if (Ae && ue.has(e))
    return ue.get(e);
  if (n) {
    var o = (
                            
      e
    );
    if (Ae) {
      var c = o.v;
      return ((o.f & U) === 0 && o.reactions !== null || cr(o)) && (c = en(o)), ue.set(o, c), c;
    }
    var l = (o.f & ne) === 0 && !se && C !== null && (dt || (C.f & ne) !== 0), s = (o.f & Ze) === 0;
    lt(o) && (l && (o.f |= ne), Fn(o)), l && !s && (Mn(o), sr(o));
  }
  if (le?.has(e))
    return le.get(e);
  if ((e.f & Ee) !== 0)
    throw e.v;
  return e.v;
}
function sr(e) {
  if (e.f |= ne, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & H) !== 0 && (t.f & ne) === 0 && (Mn(
                              
        t
      ), sr(
                              
        t
      ));
}
function cr(e) {
  if (e.v === P) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ue.has(t) || (t.f & H) !== 0 && cr(
                            
      t
    ))
      return !0;
  return !1;
}
function cn(e) {
  var t = se;
  try {
    return se = !0, e();
  } finally {
    se = t;
  }
}
const Ea = ["touchstart", "touchmove"];
function Oa(e) {
  return Ea.includes(e);
}
const Je =                 Symbol("events"), fr =                 new Set(), Mt =                 new Set();
function Aa(e, t, n) {
  (t[Je] ??= {})[e] = n;
}
function La(e) {
  for (var t = 0; t < e.length; t++)
    fr.add(e[t]);
  for (var n of Mt)
    n(e);
}
let kt = null, Rt = !1;
function gn(e) {
  var t = this, n = (
                       
    t.ownerDocument
  ), r = e.type, a = e.composedPath?.() || [], i = (
                                 
    a[0] || e.target
  );
  kt = e, Rt || (Rt = !0, setTimeout(() => {
    Rt = !1, kt = null;
  }));
  var o = 0, c = kt === e && e[Je];
  if (c) {
    var l = a.indexOf(c);
    if (l !== -1 && (t === document || t ===                   
    window)) {
      e[Je] = t;
      return;
    }
    var s = a.indexOf(t);
    if (s === -1)
      return;
    l <= s && (o = l);
  }
  if (i =                       
  a[o] || e.target, i !== t) {
    Ln(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = C, p = k;
    ae(null), he(null);
    try {
      for (var _, f = []; i !== null && i !== t; ) {
        try {
          var u = i[Je]?.[r];
          u != null && (!                  
          i.disabled ||                                                                                           
                                                                                                     
          e.target === i) && u.call(i, e);
        } catch (E) {
          _ ? f.push(E) : _ = E;
        }
        if (e.cancelBubble) break;
        o++, i = o < a.length ? (
                                
          a[o]
        ) : null;
      }
      if (_) {
        for (let E of f)
          queueMicrotask(() => {
            throw E;
          });
        throw _;
      }
    } finally {
      e[Je] = t, delete e.currentTarget, ae(v), he(p);
    }
  }
}
const Ca = (
                                                                                                             
  globalThis?.window?.trustedTypes &&                 globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
                               
    createHTML: (e) => e
  })
);
function Ta(e) {
  return (
                         
    Ca?.createHTML(e) ?? e
  );
}
function Sa(e) {
  var t = fa("template");
  return t.innerHTML = Ta(e.replaceAll("<!>", "<!---->")), t.content;
}
function ka(e, t) {
  var n = (
                         
    k
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
                       
function st(e, t) {
  var n = (t & Ir) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Sa(a ? e : "<!>" + e), r =                            
                    rn(r));
    var i = (
                                 
      n || qn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return ka(i, i), i;
  };
}
function De(e, t) {
  e !== null && e.before(
                       
    t
  );
}
function Ra(e) {
  let t = 0, n = Ie(0), r;
  return () => {
    an() && (R(n), ma(() => (t === 0 && (r = cn(() => e(() => rt(n)))), t += 1, () => {
      Te(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, rt(n));
      });
    })));
  };
}
var Na = Ve | We;
function Ia(e, t, n, r) {
  new xa(e, t, n, r);
}
class xa {
                                
  parent;
  is_pending = !1;
     
                                                                                                           
                                                             
                                        
     
  transform_error;
                             
  #t;
                                    
  #o = null;
                              
  #e;
                                         
  #s;
                       
  #r;
                              
  #i = null;
                              
  #n = null;
                              
  #l = null;
                                        
  #a = null;
  #p = 0;
  #c = 0;
  #f = !1;
                            
  #d =                 new Set();
                            
  #_ =                 new Set();
     
                                                                          
                                                                     
                                                                       
                                    
                                  
     
  #u = null;
  #b = Ra(() => (this.#u = Ie(this.#p), () => {
    this.#u = null;
  }));
     
                               
                                 
                                               
                                                                         
     
  constructor(t, n, r, a) {
    this.#t = t, this.#e = n, this.#s = (i) => {
      var o = (
                             
        k
      );
      o.b = this, o.f |= jt, r(i);
    }, this.parent =                      
    k.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), this.#r = on(() => {
      this.#h();
    }, Na);
  }
  #m() {
    try {
      this.#i = ee(() => this.#s(this.#t));
    } catch (t) {
      this.error(t);
    }
  }
     
                                                                                      
     
  #y(t) {
    const n = this.#e.failed, { reset: r, invoke_onerror: a } = this.#w(t);
    Te(a), n && (this.#l = ee(() => {
      n(
        this.#t,
        () => t,
        () => r
      );
    }));
  }
     
                                                                              
                                                 
                           
                                                                 
     
  #w(t) {
    var n = !1, r = !1;
    const a = () => {
      if (n) {
        Pr();
        return;
      }
      n = !0, r && Zr(), this.#l !== null && ke(this.#l, () => {
        this.#l = null;
      }), this.#v(() => {
        this.#h();
      });
    };
    return { reset: a, invoke_onerror: () => {
      try {
        r = !0, this.#e.onerror?.(t, a), r = !1;
      } catch (o) {
        fe(o, this.#r && this.#r.parent);
      }
    } };
  }
  #E() {
    const t = this.#e.pending;
    t && (this.is_pending = !0, this.#n = ee(() => t(this.#t)), Te(() => {
      var n = this.#a = document.createDocumentFragment(), r = Ye(), a = !1;
      if (n.append(r), this.#i = this.#v(() => {
        try {
          return ee(() => this.#s(r));
        } catch (i) {
          try {
            this.error(i), a = !0;
          } catch (o) {
            fe(o, this.#r.parent);
          }
          return null;
        }
      }), this.#i === null) {
        this.#a = null, a && this.#g(
                              
          S
        );
        return;
      }
      this.#c === 0 && (this.#t.before(n), this.#a = null, ke(
                             
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#g(
                            
        S
      ));
    }));
  }
  #h() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#p = 0, this.#i = ee(() => {
        this.#s(this.#t);
      }), this.#c > 0) {
        var t = this.#a = document.createDocumentFragment();
        sn(this.#i, t);
        const n = (
                                               
          this.#e.pending
        );
        this.#n = ee(() => n(this.#t));
      } else
        this.#g(
                              
          S
        );
    } catch (n) {
      this.error(n);
    }
  }
     
                         
     
  #g(t) {
    this.is_pending = !1, t.transfer_effects(this.#d, this.#_);
  }
     
                                                                          
                           
     
  defer_effect(t) {
    zn(t, this.#d, this.#_);
  }
     
                                                                                          
                       
     
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
     
                
                        
     
  #v(t) {
    var n = k, r = C, a = V;
    he(this.#r), ae(this.#r), Ge(this.#r.ctx);
    try {
      return Oe.ensure(), t();
    } finally {
      he(n), ae(r), Ge(a);
    }
  }
     
                                                                                     
                                                                                
                      
                         
     
  #O(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#O(t, n);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#g(n), this.#n && ke(this.#n, () => {
      this.#n = null;
    }), this.#a && (this.#t.before(this.#a), this.#a = null));
  }
     
                                                                            
                                                                         
                                      
                      
                         
     
  update_pending_count(t, n) {
    this.#O(t, n), this.#p += t, !(!this.#u || this.#f) && (this.#f = !0, Te(() => {
      this.#f = !1, this.#u && Ke(this.#u, this.#p);
    }));
  }
  get_effect_pending() {
    return this.#b(), R(
                                   
      this.#u
    );
  }
                               
  error(t) {
    if (!this.#e.onerror && !this.#e.failed)
      throw t;
    S?.is_fork ? (this.#i && S.skip_effect(this.#i), this.#n && S.skip_effect(this.#n), this.#l && S.skip_effect(this.#l), S.oncommit(() => {
      this.#A(t);
    })) : this.#A(t);
  }
     
                           
     
  #A(t) {
    this.#i && (Y(this.#i), this.#i = null), this.#n && (Y(this.#n), this.#n = null), this.#l && (Y(this.#l), this.#l = null);
    let n = this.#e.failed;
    const r = (a) => {
      const { reset: i, invoke_onerror: o } = this.#w(a);
      o(), n && (this.#l = this.#v(() => {
        try {
          return ee(() => {
            var c = (
                                   
              k
            );
            c.b = this, c.f |= jt, n(
              this.#t,
              () => a,
              () => i
            );
          });
        } catch (c) {
          return fe(
            c,
                                 
            this.#r.parent
          ), null;
        }
      }));
    };
    Te(() => {
      var a;
      try {
        a = this.transform_error(t);
      } catch (i) {
        fe(i, this.#r && this.#r.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof                   
      a.then == "function" ? a.then(
        r,
                                 
        (i) => fe(i, this.#r && this.#r.parent)
      ) : r(a);
    });
  }
}
function te(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !==                   
  (e[Pt] ??= e.nodeValue) && (e[Pt] = n, e.nodeValue = `${n}`);
}
function ja(e, t) {
  return Da(e, t);
}
const ct =                 new Map();
function Da(e, { target: t, anchor: n, props: r = {}, events: a, context: i, intro: o = !0, transformError: c }) {
  sa();
  var l = void 0, s = pa(() => {
    var v = n ?? t.appendChild(Ye());
    Ia(
                                 
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        Qt({});
        var u = (
                                         
          V
        );
        i && (u.c = i), a && (r.$$events = a), l = e(f, r) || xn(), Xt();
      },
      c
    );
    var p =                 new Set(), _ = (f) => {
      for (var u = 0; u < f.length; u++) {
        var E = f[u];
        if (!p.has(E)) {
          p.add(E);
          var A = Oa(E);
          for (const b of [t, document]) {
            var d = ct.get(b);
            d === void 0 && (d =                 new Map(), ct.set(b, d));
            var h = d.get(E);
            h === void 0 ? (b.addEventListener(E, gn, { passive: A }), d.set(E, 1)) : d.set(E, h + 1);
          }
        }
      }
    };
    return _(Et(fr)), Mt.add(_), () => {
      for (var f of p)
        for (const A of [t, document]) {
          var u = (
                                              
            ct.get(A)
          ), E = (
                                 
            u.get(f)
          );
          --E == 0 ? (A.removeEventListener(f, gn), u.delete(f), u.size === 0 && ct.delete(A)) : u.set(f, E);
        }
      Mt.delete(_), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Ht.set(l, s), l;
}
let Ht =                 new WeakMap();
function bn(e, t) {
  const n = Ht.get(e);
  return n ? (Ht.delete(e), n(t)) : Promise.resolve();
}
class Pa {
                             
  anchor;
                                
  #t =                 new Map();
     
                                                                   
                                                                      
             
        
                    
         
            
         
          
        
                                                                 
                             
     
  #o =                 new Map();
     
                                                                                          
                                                     
                             
     
  #e =                 new Map();
     
                                                
                     
     
  #s =                 new Set();
     
                                                                     
                                             
     
  #r = !0;
     
                                 
                                
     
  constructor(t, n = !0) {
    this.anchor = t, this.#r = n;
  }
     
                         
     
  #i = (t) => {
    if (this.#t.has(t)) {
      var n = (
                          
        this.#t.get(t)
      ), r = this.#o.get(n);
      if (r)
        gt(r), this.#s.delete(n);
      else {
        var a = this.#e.get(n);
        a && (gt(a.effect), this.#o.set(n, a.effect), this.#e.delete(n), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), r = a.effect);
      }
      for (const [i, o] of this.#t) {
        if (this.#t.delete(i), i === t)
          break;
        const c = this.#e.get(o);
        c && (Y(c.effect), this.#e.delete(o));
      }
      for (const [i, o] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const c = () => {
          if (Array.from(this.#t.values()).includes(i)) {
            var s = document.createDocumentFragment();
            sn(o, s), s.append(Ye()), this.#e.set(i, { effect: o, fragment: s });
          } else
            Y(o);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), ke(o, c, !1)) : c();
      }
    }
  };
     
                         
     
  #n = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, a] of this.#e)
      n.includes(r) || (Y(a.effect), this.#e.delete(r));
  };
     
    
                     
                                                        
     
  ensure(t, n) {
    var r = (
                          
      S
    ), a = Qn();
    if (n && !this.#o.has(t) && !this.#e.has(t))
      if (a) {
        var i = document.createDocumentFragment(), o = Ye();
        i.append(o), this.#e.set(t, {
          effect: ee(() => n(o)),
          fragment: i
        });
      } else
        this.#o.set(
          t,
          ee(() => n(this.anchor))
        );
    if (this.#t.set(r, t), a) {
      for (const [c, l] of this.#o)
        c === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [c, l] of this.#e)
        c === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#n);
    } else
      this.#i(r);
  }
}
function Nt(e, t, n = !1) {
  var r = new Pa(e), a = n ? Ve : 0;
  function i(o, c) {
    r.ensure(o, c);
  }
  on(() => {
    var o = !1;
    t((c, l = 0) => {
      o = !0, i(l, c);
    }), o || i(-1, null);
  }, a);
}
function za(e, t, n) {
  for (var r = [], a = t.length, i, o = t.length, c = 0; c < a; c++) {
    let p = t[c];
    ke(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var _ = (
                                                
              e.outrogroups
            );
            Bt(e, Et(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var s = (
                              
        n
      ), v = (
                              
        s.parentNode
      );
      ca(v), v.append(s), e.items.clear();
    }
    Bt(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done:                 new Set()
    }, (e.outrogroups ??=                 new Set()).add(i);
}
function Bt(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r =                 new Set();
    for (const o of e.pending.values())
      for (const c of o)
        r.add(
                                 
          e.items.get(c).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (r?.has(i)) {
      i.f |= _e;
      const o = document.createDocumentFragment();
      sn(i, o);
    } else
      Y(t[a], n);
  }
}
var wn;
function Ua(e, t, n, r, a, i = null) {
  var o = e, c =                 new Map(), l = null, s =                 ea(() => {
    var d = n();
    return (
                        
      yt(d) ? d : d == null ? [] : Et(d)
    );
  }), v, p =                 new Map(), _ = !0;
  function f(d) {
    (A.effect.f & W) === 0 && (A.pending.delete(d), A.fallback = l, Fa(A, v, o, t, r), l !== null && (v.length === 0 ? (l.f & _e) === 0 ? gt(l) : (l.f ^= _e, $e(l, null, o)) : ke(l, () => {
      l = null;
    })));
  }
  function u(d) {
    A.pending.delete(d);
  }
  var E = on(() => {
    v =                   
    R(s);
    for (var d = v.length, h =                 new Set(), b = (
                          
      S
    ), m = Qn(), w = 0; w < d; w += 1) {
      var y = v[w], L = r(y, w), O = _ ? null : c.get(L);
      O ? (O.v && Ke(O.v, y), O.i && Ke(O.i, w), m && b.unskip_effect(O.e)) : (O = Ma(
        c,
        _ ? o : wn ??= Ye(),
        y,
        L,
        w,
        a,
        t,
        n
      ), _ || (O.e.f |= _e), c.set(L, O)), h.add(L);
    }
    if (d === 0 && i && !l && (_ ? l = ee(() => i(o)) : (l = ee(() => i(wn ??= Ye())), l.f |= _e)), d > h.size && Mr(), !_)
      if (p.set(b, h), m) {
        for (const [I, x] of c)
          h.has(I) || b.skip_effect(x.e);
        b.oncommit(f), b.ondiscard(u);
      } else
        f(b);
    R(s);
  }), A = { effect: E, items: c, pending: p, outrogroups: null, fallback: l };
  _ = !1;
}
function Qe(e) {
  for (; e !== null && (e.f & re) === 0; )
    e = e.next;
  return e;
}
function Fa(e, t, n, r, a) {
  var i = t.length, o = e.items, c = Qe(e.effect.first), l, s = null, v = [], p = [], _, f, u, E;
  for (E = 0; E < i; E += 1) {
    if (_ = t[E], f = a(_, E), u =                        
    o.get(f).e, e.outrogroups !== null)
      for (const O of e.outrogroups)
        O.pending.delete(u), O.done.delete(u);
    if ((u.f & B) !== 0 && gt(u), (u.f & _e) !== 0)
      if (u.f ^= _e, u === c)
        $e(u, null, n);
      else {
        var A = s ? s.next : c;
        u === e.effect.last && (e.effect.last = u.prev), u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), we(e, s, u), we(e, u, A), $e(u, A, n), s = u, v = [], p = [], c = Qe(s.next);
        continue;
      }
    if (u !== c) {
      if (l !== void 0 && l.has(u)) {
        if (v.length < p.length) {
          var d = p[0], h;
          s = d.prev;
          var b = v[0], m = v[v.length - 1];
          for (h = 0; h < v.length; h += 1)
            $e(v[h], d, n);
          for (h = 0; h < p.length; h += 1)
            l.delete(p[h]);
          we(e, b.prev, m.next), we(e, s, b), we(e, m, d), c = d, s = m, E -= 1, v = [], p = [];
        } else
          l.delete(u), $e(u, c, n), we(e, u.prev, u.next), we(e, u, s === null ? e.effect.first : s.next), we(e, s, u), s = u;
        continue;
      }
      for (v = [], p = []; c !== null && c !== u; )
        (l ??=                 new Set()).add(c), p.push(c), c = Qe(c.next);
      if (c === null)
        continue;
    }
    (u.f & _e) === 0 && v.push(u), s = u, c = Qe(u.next);
  }
  if (e.outrogroups !== null) {
    for (const O of e.outrogroups)
      O.pending.size === 0 && (Bt(e, Et(O.done)), e.outrogroups?.delete(O));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || l !== void 0) {
    var w = [];
    if (l !== void 0)
      for (u of l)
        (u.f & B) === 0 && w.push(u);
    for (; c !== null; )
      (c.f & B) === 0 && c !== e.fallback && w.push(c), c = Qe(c.next);
    var y = w.length;
    if (y > 0) {
      var L = null;
      za(e, w, L);
    }
  }
}
function Ma(e, t, n, r, a, i, o, c) {
  var l = (o & kr) !== 0 ? (o & Nr) === 0 ?                 oa(n, !1, !1) : Ie(n) : null, s = (o & Rr) !== 0 ? Ie(a) : null;
  return {
    v: l,
    i: s,
    e: ee(() => (i(t, l ?? n, s ?? a, c), () => {
      e.delete(r);
    }))
  };
}
function $e(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, a = e.nodes.end, i = t && (t.f & _e) === 0 ? (
                                
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
                                   
                        Lt(r)
      );
      if (i.before(r), r === a)
        return;
      r = o;
    }
}
function we(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ha(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ba(e, t) {
  var n = e.__defaultValue, r = e.multiple, a = r ? n ?? [] : null;
  if (!(r && !yt(a))) {
    e.selectedIndex;
    for (var i of e.options) {
      var o = Vt(i);
      Ha(
        i,
        r ? (
                              
          a.includes(o)
        ) : Yn(o, n)
      );
    }
  }
}
function ur(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!yt(t))
      return Dr();
    for (var r of e.options)
      r.selected = t.includes(Vt(r));
    return;
  }
  for (r of e.options) {
    var a = Vt(r);
    if (Yn(a, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Va(e) {
  var t = new MutationObserver((n) => {
    n.every(Ga) || ("__defaultValue" in e && Ba(e), "__value" in e && ur(e, e.__value));
  });
  t.observe(e, {
                                       
    childList: !0,
    subtree: !0,
                            
                                                       
                                                     
                                                              
    attributes: !0,
    attributeFilter: ["value"]
  }), Xn(() => {
    t.disconnect();
  });
}
function Vt(e) {
  return "__value" in e ? e.__value : e.value;
}
function Ga(e) {
  if (
                          
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Ka =                 Symbol("is custom element"), Ya =                 Symbol("is html");
function Me(e, t, n, r) {
  var a = qa(e);
  a[t] !== (a[t] = n) && (t === "loading" && (e[Cr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Za(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function qa(e) {
  return (
                                                    
                      
    e[Rn] ??= {
      [Ka]: e.nodeName.includes("-"),
      [Ya]: e.namespaceURI === xr
    }
  );
}
var yn =                 new Map();
function Za(e) {
  var t = e.getAttribute("is") || e.nodeName, n = yn.get(t);
  if (n) return n;
  yn.set(t, n =                 new Set());
  for (var r, a = e, i = Element.prototype; i !== a; ) {
    r = br(a);
    for (var o in r)
      r[o].set &&                                                                                     
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.add(o);
    a = Cn(a);
  }
  return n;
}
function Wa(e) {
  V === null && Ur(), va(() => {
    const t = cn(e);
    if (typeof t == "function") return (
                               
      t
    );
  });
}
const Qa = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??=                 new Set()).add(Qa);
var Xa =                 st("<option> </option>"), En =                 st('<p role="status" class="svelte-1jhtfjo"> </p>'), Ja =                 st('<p role="alert" class="svelte-1jhtfjo"> </p>'), $a =                 st('<div class="locale-preference svelte-1jhtfjo"><label for="hkiaLocale"> </label> <select id="hkiaLocale" aria-describedby="hkiaLocaleNotice" class="svelte-1jhtfjo"><option> </option><!></select> <p id="hkiaLocaleNotice" class="svelte-1jhtfjo"> </p> <!> <!> <!></div>');
function ei(e, t) {
  Qt(t, !0);
  const n =                 zt(() => t.state.preference.mode === "manual" ? t.state.preference.locale : "auto");
  function r(m) {
    const w = m.currentTarget, y = w.value;
    w.value = R(n), y === "auto" ? t.onchoose({ mode: "auto" }) : t.entries.some((L) => L.id === y) && t.onchoose({ mode: "manual", locale: y });
  }
  var a = $a(), i = Fe(a), o = $(i, !0), c = ie(i, 2), l = Fe(c), s = $(l, !0);
  l.value = l.__value = "auto";
  var v = ie(l);
  Ua(v, 17, () => t.entries, (m) => m.id, (m, w) => {
    var y = Xa(), L = $(y, !0), O = {};
    je(() => {
      Me(y, "lang", R(w).htmlLang), te(L, R(w).nativeName), O !== (O = R(w).id) && (y.value = (y.__value = O) ?? "");
    }), De(m, y);
  });
  var p;
  Va(c);
  var _ = ie(c, 2), f = $(_, !0), u = ie(_, 2);
  {
    var E = (m) => {
      var w = En(), y = $(w, !0);
      je(() => te(y, t.labels.loading)), De(m, w);
    };
    Nt(u, (m) => {
      t.state.status === "LOADING" && m(E);
    });
  }
  var A = ie(u, 2);
  {
    var d = (m) => {
      var w = Ja(), y = $(w, !0);
      je(() => te(y, t.labels.error)), De(m, w);
    };
    Nt(A, (m) => {
      t.state.status === "ERROR" && m(d);
    });
  }
  var h = ie(A, 2);
  {
    var b = (m) => {
      var w = En(), y = $(w, !0);
      je(() => te(y, t.labels.storageUnavailable)), De(m, w);
    };
    Nt(h, (m) => {
      t.state.storage === "UNAVAILABLE" && m(b);
    });
  }
  je(() => {
    te(o, t.labels.label), c.disabled = t.state.status === "IDLE" || t.state.status === "CLOSED", Me(c, "aria-busy", t.state.status === "LOADING"), te(s, t.labels.auto), p !== (p = R(n)) && (c.value = (c.__value = p) ?? "", ur(c, p)), te(f, t.labels.unverified);
  }), Aa("change", c, r), De(e, a), Xt();
}
La(["change"]);
var ti =                 st('<div><!> <div data-hkia-locale-scope="" class="svelte-r8qky4"><strong> </strong> <ul class="svelte-r8qky4"><li> </li><li> </li><li> </li></ul> <p class="svelte-r8qky4"><span> </span><span lang="ja">日本語名・英語名・GUIDで検索</span></p></div></div>');
function ni(e, t) {
  Qt(t, !0);
  const n = cn(() => t.controller), r = n.consumer;
  let a =                 ve(Ue(r.state));
  const i =                 zt(() => R(a).active?.pack.verified.catalog), o =                 zt(() => ({
    label: R(i)?.["locale.label"] ?? "Language",
    auto: R(i)?.["locale.auto"] ?? "Automatic (browser)",
    loading: R(i)?.["locale.loading"] ?? "Loading language data…",
    unverified: R(i)?.["locale.unverified"] ?? "Language availability in game settings is not verified.",
    error: R(i)?.["error.locale"] ?? "Language data could not be verified.",
    storageUnavailable: R(i)?.["locale.storageUnavailable"] ?? "Language preference could not be stored."
  }));
  Wa(() => {
    const L = r.subscribe((O) => ye(a, O, !0));
    return r.start("3.0.1"), () => {
      L(), n.close();
    };
  });
  function c(L) {
    r.choose(L);
  }
  var l = ti(), s = Fe(l);
  ei(s, {
    get entries() {
      return r.entries;
    },
    get state() {
      return R(a);
    },
    get labels() {
      return R(o);
    },
    onchoose: c
  });
  var v = ie(s, 2), p = Fe(v), _ = $(p, !0), f = ie(p, 2), u = Fe(f), E = $(u, !0), A = ie(u), d = $(A), h = ie(A), b = $(h, !0), m = ie(f, 2), w = Fe(m), y = $(w);
  je(() => {
    Me(l, "data-hkia-locale-chrome", R(a).active?.locale ?? ""), Me(l, "data-locale-status", R(a).status), Me(l, "lang", R(a).active?.locale ?? "en"), Me(v, "lang", R(a).active?.locale ?? "en"), te(_, R(i)?.["state.previewOnly"] ?? "Preview only"), te(E, R(i)?.["nav.tabs"] ?? "Tabs"), te(d, `${R(i)?.["ach.filter.label"] ?? "Achievement filters" ?? ""} / ${R(i)?.["col.filter.label"] ?? "Collection filters" ?? ""}`), te(b, R(i)?.["ach.detail.heading"] ?? "Achievement details"), te(y, `${R(i)?.["ach.search.label"] ?? "Achievement search" ?? ""}:`);
  }), De(e, l), Xt();
}
function ri(e) {
  const { runtime: t, storage: n, registry: r } = e, a = r.map((h) => Object.freeze({ ...h })), i = Object.freeze(a.map((h) => h.id));
  if (!i.length || new Set(i).size !== i.length || a.some((h) => !h.id || !h.nativeName || !h.htmlLang || !["ltr", "rtl"].includes(h.direction))) throw new Error("INVALID_LOCALE_REGISTRY");
  let o = "AVAILABLE";
  const c = { getItem(h) {
    try {
      return n.getItem(h);
    } catch (b) {
      throw o = "UNAVAILABLE", b;
    }
  }, setItem(h, b) {
    try {
      n.setItem(h, b);
    } catch (m) {
      throw o = "UNAVAILABLE", m;
    }
  }, removeItem(h) {
    try {
      n.removeItem(h);
    } catch (b) {
      throw o = "UNAVAILABLE", b;
    }
  } };
  let l = t.readPreference(c);
  l.mode === "manual" && !i.includes(l.locale) && (l = { mode: "auto" });
  let s = Object.freeze({ status: "IDLE", preference: Object.freeze({ ...l }), version: null, active: null, storage: o, error: null }), v = 0;
  const p = t.createLocaleLoader(e.fetchVerified), _ =                 new Set();
  function f(h) {
    return h === v && s.status !== "CLOSED";
  }
  function u(h) {
    const b = Object.freeze(h);
    s = b;
    for (const m of _) {
      if (s !== b) break;
      m(b);
    }
  }
  function E(h) {
    return h.mode === "auto" || h.mode === "manual" && i.includes(h.locale);
  }
  function A(h, b) {
    let m;
    const w = (I, x) => {
      if (m) throw Error("MULTIPLE_PREFERENCE_WRITES");
      m = { key: I, value: x };
    };
    try {
      t.writePreference({ getItem() {
        throw Error("UNEXPECTED_PREFERENCE_READ");
      }, setItem: w, removeItem: (I) => w(I, null) }, b);
    } catch {
      f(h) && (o = "UNAVAILABLE");
      return;
    }
    if (!f(h)) return;
    if (!m) {
      o = "UNAVAILABLE";
      return;
    }
    const { key: y, value: L } = m;
    let O;
    try {
      O = n.getItem(y);
    } catch {
      f(h) && (o = "UNAVAILABLE");
      return;
    }
    if (f(h)) {
      try {
        L === null ? n.removeItem(y) : n.setItem(y, L);
      } catch {
        f(h) && (o = "UNAVAILABLE");
      }
      if (!f(h))
        try {
          n.getItem(y) === L && O !== L && (O === null ? n.removeItem(y) : n.setItem(y, O));
        } catch {
          o = "UNAVAILABLE";
        }
    }
  }
  async function d(h, b, m = !1) {
    if (s.status === "CLOSED") throw new Error("LOCALE_CONSUMER_CLOSED");
    if (!["3.0.0", "3.0.1"].includes(h) || !E(b)) throw new Error("INVALID_LOCALE_REQUEST");
    const w = Object.freeze({ ...b }), y = ++v;
    let L, O;
    try {
      const I = e.browser();
      if (!f(y) || (L = t.resolvePreference(w, I, i), !f(y))) return "STALE";
      const x = a.find((N) => N.id === L);
      if (!x) throw new Error("INVALID_RESOLVED_LOCALE");
      O = x;
    } catch (I) {
      if (!f(y)) return "STALE";
      throw I;
    }
    try {
      if (u({ ...s, status: "LOADING", version: h, active: s.active?.version === h ? s.active : null, error: null }), !f(y)) return "STALE";
      const I = await p.load(h, L);
      if (!f(y) || I.status === "STALE") return "STALE";
      if (I.pack.version !== h || I.pack.locale !== L)
        return u({ ...s, status: "ERROR", error: "PACK_MISMATCH" }), f(y) ? "ERROR" : "STALE";
      const x = s.active, N = () => {
        if (s.status === "CLOSED" || !x || s.active !== x) return;
        const M = a.find((g) => g.id === x.locale);
        if (M) try {
          e.documentLanguage(M.htmlLang, M.direction);
        } catch {
        }
      };
      try {
        e.documentLanguage(O.htmlLang, O.direction);
      } catch (M) {
        if (!f(y))
          return N(), "STALE";
        throw M;
      }
      return !f(y) || (m && A(y, w), !f(y)) ? (N(), "STALE") : (u({ status: "READY", preference: w, version: h, active: Object.freeze({ version: h, locale: L, pack: I.pack }), storage: o, error: null }), f(y) ? "READY" : "STALE");
    } catch {
      return f(y) ? (u({ ...s, status: "ERROR", storage: o, error: "LOAD_FAILED" }), f(y) ? "ERROR" : "STALE") : "STALE";
    }
  }
  return Object.freeze({ get state() {
    return s;
  }, entries: Object.freeze(a), subscribe(h) {
    return _.add(h), h(s), () => _.delete(h);
  }, start(h) {
    return d(h, s.preference);
  }, choose(h) {
    if (s.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return d(s.version, h, !0);
  }, refreshAuto() {
    if (s.version === null) throw new Error("LOCALE_VERSION_REQUIRED");
    return d(s.version, s.preference);
  }, close() {
    s.status !== "CLOSED" && (v++, p.invalidate(), u({ ...s, status: "CLOSED", active: null, version: null, error: null }), _.clear());
  } });
}
const Gt = Object.freeze({ de: "bd5bb8948e5e15e886c4f58421b00b41f0ec68a8ec627b023776ac1525507edb", en: "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", "en-GB": "af38facf8f7acbb982c9794909a1cc08edd5d94850795d69cd9ef23640e80c9f", es: "fb3061db5c00ef1c32d24af6b49246e53924dd90bd7984993c4a0774d037950d", fr: "1504c6d257bfb77003fecdd7acbc5cf114a8e51050a7521ab4ca42eeb2fc9737", "fr-CA": "17360cc5e61429400bdf4fa703121a54a0aeaf2368902609bc2e0d7dfa166038", it: "252954237409005d1fee26f96f604619380001917dccd93b133ead52a6549619", ja: "5729953617fdda2c39fef0499dc922a55c6b4a0d0bf134fa1a656cb3deb74851", ko: "df8800988f3c50fcee9a73e5c60093da4ef2737bb62cd841466ecae2e41874c7", nl: "a9c9f522c04c61a85e63d030a2407028e122a4c9cff95d57d7b1df6e1c7ae948", "pt-BR": "9befdaa8b85d09f623f75ed980af465afa88e7a07a163ec7f87f9aaf90974c13", ru: "08c523b001893cb1c1b3a510ac68a1874c1194ef7a0690f2aad1cd8f1c2d57cd", tr: "9e0a2f2ee46bb9f5c8eae28842e4ea53cc1000146d375250b132e450ee5530b5", "zh-Hans": "9a5b1098e6cf9a9f19a0dea90a48bda78ecd0ef95ade4c4ca54e4082237b0139", "zh-Hant": "9638729fca88ca34e47006eef3889b8b2491ddc0a79cf6588f155ad2de0633cc" }), bt = Object.freeze(["nav.achievements", "nav.collections", "nav.workspace", "nav.tabs", "r2.preview", "ach.intro", "ach.count", "ach.empty", "col.intro", "col.count", "ach.search.label", "ach.search.placeholder", "ach.filter.label", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.label", "ach.image.all", "ach.image.exact", "ach.image.sourceNull", "ach.image.unknown", "ach.sort.label", "ach.sort.source", "ach.sort.name", "ach.sort.progressDesc", "ach.sort.progressAsc", "ach.sort.completedFirst", "col.search.label", "col.search.placeholder", "col.filter.label", "col.filter.all", "col.filter.hasRecord", "col.filter.noRecord", "col.filter.unknown", "col.sort.label", "col.sort.source", "col.sort.name", "col.sort.recordDesc", "locale.label", "locale.auto", "locale.loading", "locale.unverified", "file.open", "file.status", "file.backup", "file.export", "edit.preview", "edit.apply", "edit.undo", "edit.redo", "edit.reset", "edit.complete", "edit.revoke", "edit.collect", "edit.uncollect", "edit.progress", "edit.date", "edit.collectionDate", "edit.batch", "edit.selected", "state.unknown", "state.unverified", "state.unsupported", "state.notRecorded", "state.absentRef", "state.missingText", "state.writerOff", "state.previewOnly", "warning.linkage", "warning.history", "warning.reward", "error.file", "error.version", "error.stale", "error.integrity", "error.locale", "privacy.local", "credits.notice", "col.grid.empty", "col.image.label", "col.image.unverified", "col.image.unknown", "col.image.status", "col.grid.recorded", "col.grid.parentReference", "col.grid.unmatched", "r3.detail.preview", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "ach.row.unknownName", "ach.row.externalImageUnknown", "r4.ach.limit", "ach.list.more", "ach.row.image.label", "ach.row.image.unverified", "ach.row.image.status", "ach.row.status.missing", "ach.row.aria", "ach.row.subtitle.missing", "ach.row.subtitle.document", "ach.list.unreadable", "ach.list.noMatch", "ach.list.unloaded", "col.item.search.placeholder", "col.item.search.label", "col.item.history.label", "col.item.sort.label", "col.item.sort.internal", "col.item.sort.id", "col.item.inspect", "col.item.empty", "col.item.guid", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.calendar", "col.item.history.unknownHint", "col.item.previewHint", "col.item.list.caption", "ach.detail.heading", "ach.detail.empty", "ach.detail.missingHint", "ach.detail.definitionMatch", "ach.detail.matched", "ach.detail.unknownValue", "ach.detail.unset", "ach.linkage.heading", "ach.linkage.requiredConfirmed", "ach.linkage.requiredCandidate", "ach.linkage.related", "ach.linkage.unknown", "ach.linkage.hint", "ach.facts.heading", "ach.facts.definitionHeading", "ach.facts.builtinHint", "ach.facts.groupHint", "ach.facts.dlcHint", "ach.facts.groupNameHint", "ach.facts.counterUnknown", "ach.facts.counterAbsent", "ach.facts.counterNull", "ach.facts.rewardUnknown", "ach.facts.rewardNone", "ach.facts.childMissing", "ach.facts.childIncomplete", "ach.facts.groupProgress", "col.item.image.label", "col.definition.image.label", "col.item.image.unverified", "col.item.image.status", "col.item.history.recorded", "col.item.history.absent", "col.item.history.status", "col.item.ticks", "col.item.calendarUnknown", "col.item.parent", "col.item.parentCross", "col.item.history.rawUnknown", "ach.detail.unknownDefinition", "ach.linkage.count", "ach.linkage.unverifiedCount", "ach.linkage.systemCount", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.definitionUnknown", "ach.facts.groupUnknown", "ach.facts.counterName", "ach.facts.threshold", "ach.facts.builtin", "ach.facts.counterGuid", "ach.facts.counterSaved", "ach.facts.counterDocument", "ach.facts.onlyUniques", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.rewardDefinition", "ach.facts.rewardReceipt", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.groupName", "ach.facts.referenceCount", "ach.facts.savedCompletion", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.definitionGuid", "ach.facts.groupAbsent", "ach.detail.statusLabel", "locale.previewScope", "locale.storageUnavailable"]), ai = bt.length;
async function dr(e, t, n) {
  if (typeof t != "string" || !Object.hasOwn(Gt, t) || !(e instanceof Uint8Array) || e.length === 0 || e.length > 65536) throw Error("EDITOR_CATALOG_CONTRACT");
  const r = Uint8Array.from(e), a = await n(r.slice());
  if (a !== Gt[t]) throw Error("EDITOR_CATALOG_SHA");
  const i = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r));
  if (!i || Object.getPrototypeOf(i) !== Object.prototype || Object.keys(i).length !== ai || !bt.every((o) => Object.hasOwn(i, o) && typeof i[o] == "string" && i[o].trim())) throw Error("EDITOR_CATALOG_KEYS");
  return Object.freeze({ digest: a, catalog: Object.freeze(i) });
}
const It = Object.freeze({ de: "af0e9e43f02c87f107cdb27ee63b1df64e6d1d1d1689ec62ead7dab84a04fb49", en: "c896e315b53afd3224664bdbef27e4beb3e1cd3e9b94d23262d8218e221bf66c", "en-GB": "f59c1ba446c9ec3ae94debdf6a68ff94fef975de3045d2056d61160bc8c9c34d", es: "6f096c8fe69ede9c3246038400e267d6759de68cc4411361247665d52beb671b", fr: "d5512e9d849830bff8437e89f5ea3732ac45601bafb801ec2572b66db4f6d1b6", "fr-CA": "ebc513f876b2bac625b4fe6e9917854a7c83f757c86a4aad218134423bb2e5e2", it: "123ef52319cbe8eac0e750a6a75a412c5f1d3f6daa920b5e741761a370db5fab", ja: "d455e9535b70644cce01a4a2abe387f3a5140657397fdb2b66f8567c5d9b8c2c", ko: "d877dd74ccc0c533912ffe63d646d51e456d22ebe3e00d6abd17f5983f11f4ba", nl: "39c69b6709be8e36d9eac82552b5d136ffc1fde147cdb220508e74cce2b57478", "pt-BR": "d5157fad02b6535552ee1ced049f3e9c45aa810fa6796af60e038f8cf55e98ab", ru: "55b15bb91abaa5f51243c8c661d593d3d3b8753d0f97152ddeaeb53298839e56", tr: "77d77b8d40d62ec3203adb1f5870f1af41ef2e9b1741dbbab0dec9a425181335", "zh-Hans": "cd8ccb9a9cda4247e102d5a6f788505c434f9fdb8c622ea4b82f24072a6a9418", "zh-Hant": "8a32cb00ad5fcc283bf822dd77c90d88db2321c865ffe644399dae3f77d9d08d" }), ii = Object.freeze(["nav.achievements", "nav.collections", "nav.workspace", "nav.tabs", "r2.preview", "ach.intro", "ach.count", "ach.empty", "col.intro", "col.count", "ach.search.label", "ach.search.placeholder", "ach.filter.label", "ach.filter.all", "ach.filter.complete", "ach.filter.incomplete", "ach.filter.missing", "ach.filter.unknownSource", "ach.image.label", "ach.image.all", "ach.image.exact", "ach.image.sourceNull", "ach.image.unknown", "ach.sort.label", "ach.sort.source", "ach.sort.name", "ach.sort.progressDesc", "ach.sort.progressAsc", "ach.sort.completedFirst", "col.search.label", "col.search.placeholder", "col.filter.label", "col.filter.all", "col.filter.hasRecord", "col.filter.noRecord", "col.filter.unknown", "col.sort.label", "col.sort.source", "col.sort.name", "col.sort.recordDesc", "locale.label", "locale.auto", "locale.loading", "locale.unverified", "file.open", "file.status", "file.backup", "file.export", "edit.preview", "edit.apply", "edit.undo", "edit.redo", "edit.reset", "edit.complete", "edit.revoke", "edit.collect", "edit.uncollect", "edit.progress", "edit.date", "edit.collectionDate", "edit.batch", "edit.selected", "state.unknown", "state.unverified", "state.unsupported", "state.notRecorded", "state.absentRef", "state.missingText", "state.writerOff", "state.previewOnly", "warning.linkage", "warning.history", "warning.reward", "error.file", "error.version", "error.stale", "error.integrity", "error.locale", "privacy.local", "credits.notice", "col.grid.empty", "col.image.label", "col.image.unverified", "col.image.unknown", "col.image.status", "col.grid.recorded", "col.grid.parentReference", "col.grid.unmatched", "r3.detail.preview", "r4.ach.preview", "r4.ach.selection", "r4.ach.unselected", "ach.row.unknownName", "ach.row.externalImageUnknown", "r4.ach.limit", "ach.list.more", "ach.row.image.label", "ach.row.image.unverified", "ach.row.image.status", "ach.row.status.missing", "ach.row.aria", "ach.row.subtitle.missing", "ach.row.subtitle.document", "ach.list.unreadable", "ach.list.noMatch", "ach.list.unloaded", "col.item.search.placeholder", "col.item.search.label", "col.item.history.label", "col.item.sort.label", "col.item.sort.internal", "col.item.sort.id", "col.item.inspect", "col.item.empty", "col.item.guid", "col.item.history.presence", "col.item.history.rawTicks", "col.item.history.calendar", "col.item.history.unknownHint", "col.item.previewHint", "col.item.list.caption", "ach.detail.heading", "ach.detail.empty", "ach.detail.missingHint", "ach.detail.definitionMatch", "ach.detail.matched", "ach.detail.unknownValue", "ach.detail.unset", "ach.linkage.heading", "ach.linkage.requiredConfirmed", "ach.linkage.requiredCandidate", "ach.linkage.related", "ach.linkage.unknown", "ach.linkage.hint", "ach.facts.heading", "ach.facts.definitionHeading", "ach.facts.builtinHint", "ach.facts.groupHint", "ach.facts.dlcHint", "ach.facts.groupNameHint", "ach.facts.counterUnknown", "ach.facts.counterAbsent", "ach.facts.counterNull", "ach.facts.rewardUnknown", "ach.facts.rewardNone", "ach.facts.childMissing", "ach.facts.childIncomplete", "ach.facts.groupProgress", "col.item.image.label", "col.definition.image.label", "col.item.image.unverified", "col.item.image.status", "col.item.history.recorded", "col.item.history.absent", "col.item.history.status", "col.item.ticks", "col.item.calendarUnknown", "col.item.parent", "col.item.parentCross", "col.item.history.rawUnknown", "ach.detail.unknownDefinition", "ach.linkage.count", "ach.linkage.unverifiedCount", "ach.linkage.systemCount", "ach.facts.internalKey", "ach.facts.membersHeading", "ach.facts.membersLabel", "ach.facts.definitionUnknown", "ach.facts.groupUnknown", "ach.facts.counterName", "ach.facts.threshold", "ach.facts.builtin", "ach.facts.counterGuid", "ach.facts.counterSaved", "ach.facts.counterDocument", "ach.facts.onlyUniques", "ach.facts.countedGuids", "ach.facts.countedValues", "ach.facts.rewardDefinition", "ach.facts.rewardReceipt", "ach.facts.rewardValue", "ach.facts.rewardZero", "ach.facts.groupName", "ach.facts.referenceCount", "ach.facts.savedCompletion", "ach.facts.groupCounter", "ach.facts.groupGuid", "ach.facts.definitionGuid", "ach.facts.groupAbsent", "ach.detail.statusLabel", "locale.previewScope", "locale.storageUnavailable", "file.title", "file.notLoaded", "file.drop", "file.choose", "file.chooseAria", "file.inputFormats", "file.exportAccount", "file.exportZip", "file.zipBusy", "file.dirty", "file.structuralReadOnly", "file.tooLarge", "file.unsupportedFormats", "file.loadFailedPriorInvalid", "file.loadFailedReason", "file.accountExportBlocked", "file.zipExportFailed", "native.sessionLabel", "native.open", "native.close", "native.download", "native.discard", "native.ready", "native.busy", "native.moduleUnavailable", "native.chooseZip", "native.exportReady", "native.exportBlocked", "native.closed", "native.exported", "native.exportFailed", "native.discarded", "native.stagedLabel", "native.notDownloaded", "native.previewLabel", "native.versionSlotLabel", "native.revisionLabel", "native.capabilitiesLabel", "native.applyExportLabel", "revision.checking", "revision.observed", "revision.unknown", "revision.inputDetail", "revision.snapshotNotice", "revision.fileChanged", "revision.unknownReason", "revision.comparisonScope", "revision.casMismatch", "revision.casUnknown", "revision.casLocalMatch", "revision.nativeOff", "file.loadedSummary", "file.slotCountUnknown", "file.headerSummary", "file.slotStructuralReadOnly", "file.slotKnownRead", "file.slotDomainSummary", "file.slotOpaqueWarning", "file.domainReadable", "file.domainUnknown"]), hr =                 new WeakSet();
async function oi(e, t, n) {
  if (typeof t != "string" || !Object.hasOwn(It, t) || !(e instanceof Uint8Array) || !e.length || e.length > 65536 || typeof n != "function") throw Error("CATALOG252_CONTRACT");
  const r = Uint8Array.from(e);
  if (await n(r.slice()) !== It[t]) throw Error("CATALOG252_SHA");
  const a = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(r));
  if (!a || Object.getPrototypeOf(a) !== Object.prototype || Object.keys(a).length !== 252 || !ii.every((o) => Object.hasOwn(a, o) && typeof a[o] == "string" && a[o].trim())) throw Error("CATALOG252_KEYS");
  const i = Object.freeze({ locale: t, catalog: Object.freeze(a), digest: It[t] });
  return hr.add(i), i;
}
const Ct = (e) => hr.has(e);
async function li(e, t, n, r) {
  if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || typeof r != "function" || e.length === 0 || t.length === 0 || e.length > 65536 || t.length > 65536) throw Error("FILE252_PAIR_CONTRACT");
  const a = Uint8Array.from(e), i = Uint8Array.from(t), [o, c] = await Promise.all([dr(a, n, r), oi(i, n, r)]);
  if (!Ct(c) || c.locale !== n || bt.length !== 192 || Object.keys(o.catalog).length !== 192 || Object.keys(c.catalog).length !== 252 || !bt.every((l) => Object.hasOwn(c.catalog, l) && o.catalog[l] === c.catalog[l]))
    throw Error("FILE252_PAIR_INCOMPATIBLE");
  return Object.freeze({ locale: n, legacy: o, extended: c, readLegacyBytes: () => a.slice(), readExtendedBytes: () => i.slice() });
}
const vr = Object.freeze([{ id: "en", nativeName: "English", htmlLang: "en", direction: "ltr" }, { id: "en-GB", nativeName: "English (UK)", htmlLang: "en-GB", direction: "ltr" }, { id: "ja", nativeName: "日本語", htmlLang: "ja", direction: "ltr" }, { id: "de", nativeName: "Deutsch", htmlLang: "de", direction: "ltr" }, { id: "fr", nativeName: "Français", htmlLang: "fr", direction: "ltr" }, { id: "fr-CA", nativeName: "Français (Canada)", htmlLang: "fr-CA", direction: "ltr" }, { id: "es", nativeName: "Español", htmlLang: "es", direction: "ltr" }, { id: "it", nativeName: "Italiano", htmlLang: "it", direction: "ltr" }, { id: "nl", nativeName: "Nederlands", htmlLang: "nl", direction: "ltr" }, { id: "pt-BR", nativeName: "Português (Brasil)", htmlLang: "pt-BR", direction: "ltr" }, { id: "ru", nativeName: "Русский", htmlLang: "ru", direction: "ltr" }, { id: "tr", nativeName: "Türkçe", htmlLang: "tr", direction: "ltr" }, { id: "ko", nativeName: "한국어", htmlLang: "ko", direction: "ltr" }, { id: "zh-Hans", nativeName: "简体中文", htmlLang: "zh-Hans", direction: "ltr" }, { id: "zh-Hant", nativeName: "繁體中文", htmlLang: "zh-Hant", direction: "ltr" }].map(Object.freeze)), pr = [
  ["achievementFilter", "ach.filter.label", "達成状況", [["all", "ach.filter.all", "すべて"], ["complete", "ach.filter.complete", "達成済み"], ["incomplete", "ach.filter.incomplete", "未達成"], ["missing", "ach.filter.missing", "定義のみ・未保存"], ["unknown-source", "ach.filter.unknownSource", "保存済み・定義UNKNOWN"]]],
  ["achievementImageFilter", "ach.image.label", "実績画像で絞り込み", [["all", "ach.image.all", "全画像状態"], ["exact", "ach.image.exact", "直接画像あり"], ["source-null", "ach.image.sourceNull", "直接画像 SOURCE_NULL"], ["unknown", "ach.image.unknown", "画像未照合"]]],
  ["achievementSort", "ach.sort.label", "実績の並び順", [["source", "ach.sort.source", "元の順番"], ["name", "ach.sort.name", "名称順"], ["progress-desc", "ach.sort.progressDesc", "進捗値の大きい順"], ["progress-asc", "ach.sort.progressAsc", "進捗値の小さい順"], ["completed-first", "ach.sort.completedFirst", "達成済みを先頭"]]],
  ["collectionStatusFilter", "col.filter.label", "コレクション収集履歴で絞り込み", [["all", "col.filter.all", "全カテゴリ"], ["has-record", "col.filter.hasRecord", "収集履歴あり"], ["no-record", "col.filter.noRecord", "収集履歴なし"], ["unknown", "col.filter.unknown", "未照合"]]],
  ["collectionSort", "col.sort.label", "コレクションの並び順", [["source", "col.sort.source", "定義順"], ["name", "col.sort.name", "名称順"], ["record-desc", "col.sort.recordDesc", "記録ID数の多い順"]]]
], q = (e) => {
  if (!e) throw Error("PRODUCT_LOCALE_CHROME_CONTRACT");
}, si = [["#achTab > span", "text", "nav.achievements", "アチーブメント"], ["#colTab > span", "text", "nav.collections", "コレクション"], ['.primary-tabs[role="tablist"]', "aria-label", "nav.tabs", "表示する機能"], ["#achievementSearch", "aria-label", "ach.search.label", "実績を検索"], ["#collectionSearch", "aria-label", "col.search.label", "コレクションカテゴリを検索"], ["#collectionSearch", "placeholder", "col.search.placeholder", "コレクションカテゴリを検索"], ...pr.flatMap(([e, t, n, r]) => [["#" + e, "aria-label", t, n], ...r.map(([a, i, o]) => ["#" + e + ' option[value="' + a + '"]', "text", i, o])])], Pe = Object.freeze(si.map((e) => Object.freeze(e))), ci = ["locale.label", "locale.auto", "locale.loading", "locale.unverified", "error.locale", "locale.previewScope", "locale.storageUnavailable"], _r =                 new WeakSet();
async function fi(e, t, n) {
  const { catalog: r } = await dr(e, t, n);
  for (const i of [...Pe.map((o) => o[2]), ...ci]) q(Object.hasOwn(r, i) && typeof r[i] == "string" && r[i].trim() && !/[{}]/.test(r[i]));
  const a = Object.freeze({ locale: t, catalog: Object.freeze(r) });
  return _r.add(a), a;
}
const ft = (e, t) => t === "text" ? e.textContent : e.getAttribute(t), Kt = (e) => (q(e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 && e.childNodes[0].parentNode === e), e.childNodes[0]), On = (e, t) => {
  const { n, p: r, textNode: a } = e;
  a ? (q(Kt(n) === a), a.data = t) : r === "text" ? n.textContent = t : t === null ? n.removeAttribute(r) : n.setAttribute(r, t);
}, xt = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]);
function ui(e) {
  const t = (f) => {
    const u = e.querySelectorAll(f);
    return q(u.length === 1), u[0];
  }, n = () => {
    const f = t("#achTab"), u = t("#colTab"), E = t("#achPanel"), A = t("#colPanel"), d = t("#achievementSearch"), h = t("#collectionSearch");
    q(f.tagName === "BUTTON" && u.tagName === "BUTTON" && f.getAttribute("role") === "tab" && u.getAttribute("role") === "tab" && f.getAttribute("aria-controls") === "achPanel" && u.getAttribute("aria-controls") === "colPanel" && d.type === "search" && h.type === "search" && d.getAttribute("placeholder") === "日本語名・英語名・GUIDで検索");
    const b = pr.map(([m, , , w]) => {
      const y = t("#" + m);
      return q(y.tagName === "SELECT" && xt(Array.from(y.options, (L) => L.value), w.map((L) => L[0]))), y;
    });
    return [f, u, E, A, d, h, ...b];
  }, r = n(), a = Pe.map(([f]) => t(f)), i = [...new Set(a)].map((f) => [f, f.getAttribute("lang")]), o = Pe.map(([, f], u) => ({ n: a[u], p: f, original: ft(a[u], f), parent: a[u].parentElement, textNode: f === "text" && a[u].tagName === "OPTION" ? Kt(a[u]) : null }));
  q(o.every((f, u) => f.original === Pe[u][3]));
  for (const [f, u] of o.entries()) u.p === "text" && q(u.n.children.length === 0);
  o.push(...i.map(([f, u]) => ({ n: f, p: "lang", original: u, parent: f.parentElement })));
  let c = o.map((f) => f.original), l = null, s = !1;
  function v() {
    q(xt(n(), r) && a.every((f, u) => t(Pe[u][0]) === f) && o.every((f) => !f.textNode || Kt(f.n) === f.textNode));
  }
  function p() {
    const [f, u, E, A, d, h, ...b] = r;
    return [e.activeElement, f.getAttribute("aria-selected"), u.getAttribute("aria-selected"), f.tabIndex, u.tabIndex, f.className, u.className, E.hidden, A.hidden, ...[d, h].flatMap((m) => [m.value, m.selectionStart, m.selectionEnd, m.selectionDirection, m.disabled]), ...b.flatMap((m) => [m.value, m.selectedIndex, m.disabled, m.hidden])];
  }
  function _(f, u) {
    q(!s), s = !0;
    const E = [];
    try {
      v(), q(o.every((d, h) => ft(d.n, d.p) === c[h]));
      const A = p();
      for (const [d, h] of o.entries()) c[d] !== f[d] && (E.push(d), On(h, f[d]));
      return v(), q(xt(p(), A) && o.every((d, h) => ft(d.n, d.p) === f[h])), c = f, l = u, !0;
    } catch (A) {
      for (const d of E.reverse()) {
        const h = o[d];
        try {
          h.n.isConnected && h.n.parentElement === h.parent && ft(h.n, h.p) === f[d] && On(h, c[d]);
        } catch {
        }
      }
      throw A;
    } finally {
      s = !1;
    }
  }
  return Object.freeze({ get active() {
    return l;
  }, apply(f) {
    return q(_r.has(f) && vr.some((u) => u.id === f.locale)), _([...Pe.map((u) => f.catalog[u[2]]), ...i.map(() => f.locale)], f.locale);
  }, reset() {
    return _(o.map((f) => f.original), null);
  } });
}
function di(e) {
  if (!!e.file252 != !!e.loadExtended) throw Error("ROOT_FILE252_PAIR_REQUIRED");
  const t = ui(e.doc), n = e.header.createProductAchievementHeaderR8(e.doc), r =                 new Map();
  let a = 0, i = null, o = null, c = !1, l = !1, s = null, v = null;
  const p = () => v !== null && v.panel === e.doc.getElementById("editorPanel") && v.readSelected() === v.selected && (v.record === null || v.record.guid === v.selected);
  function _(d) {
    const h = v;
    return !h || !p() ? !1 : n.render(h.panel, () => {
      if (v !== h || !p()) throw Error("ROOT_HEADER_STALE");
      return { record: h.record, locale: d };
    }) === "APPLIED";
  }
  function f(d) {
    if (a >= Number.MAX_SAFE_INTEGER) throw Error("ROOT_LOCALE_EPOCH_EXHAUSTED");
    return Object.freeze({ epoch: ++a, catalog: d });
  }
  function u(d) {
    if (c || l) throw Error("ROOT_LOCALE_BLOCKED");
    if (d === i) return;
    const h = i, b = o, m = d ? f(d.header) : null, w = e.file252 ? (m ?? f(null)).epoch : null;
    l = !0;
    let y = !1, L = !1, O = !1, I = !1;
    try {
      d ? t.apply(d.verified) : t.reset();
      const x = d && m ? Object.freeze({ epoch: m.epoch, catalog: d.category }) : null;
      if (e.category.paintLocale(x) !== "APPLIED") throw Error("ROOT_CATEGORY_RETAINED");
      y = !0;
      const N = d && m ? Object.freeze({ epoch: m.epoch, catalog: d.items }) : null;
      if (e.items.paintLocale(N) !== "APPLIED") throw Error("ROOT_ITEMS_RETAINED");
      L = !0;
      const M = d && m ? Object.freeze({ epoch: m.epoch, catalog: d.achievementList }) : null;
      if (e.achievementList.paintLocale(M) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_RETAINED");
      if (O = !0, e.file252) {
        if (w === null || d && !d.file252) throw Error("ROOT_FILE252_UNVERIFIED");
        const g = e.file252.paintLocale(Object.freeze({ epoch: w, catalog: d?.file252 ?? null }));
        if (g === "BLOCKED" && (c = !0), g !== "APPLIED") throw Error("ROOT_FILE252_RETAINED");
        I = !0;
      }
      if (!_(m)) throw Error("ROOT_HEADER_RETAINED");
      i = d, o = m, s = d && m ? Object.freeze({ epoch: m.epoch, locale: d.locale, sha256: Gt[d.locale], catalog: d.verified.catalog }) : null;
    } catch (x) {
      let N = null;
      if (h && (y || L || O) || I)
        try {
          N = f(h?.header ?? null);
        } catch {
          c = !0;
        }
      if (I)
        try {
          if (!N || !e.file252) throw Error("ROOT_FILE252_ROLLBACK_EPOCH");
          const M = Object.freeze({ epoch: N.epoch, catalog: h?.file252 ?? null });
          if (e.file252.paintLocale(M) !== "APPLIED") throw Error("ROOT_FILE252_ROLLBACK_RETAINED");
        } catch {
          c = !0;
        }
      if (O)
        try {
          if (h && !N) throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_EPOCH");
          const M = h && N ? Object.freeze({ epoch: N.epoch, catalog: h.achievementList }) : null;
          if (e.achievementList.paintLocale(M) !== "APPLIED") throw Error("ROOT_ACHIEVEMENT_LIST_ROLLBACK_RETAINED");
        } catch {
          c = !0;
        }
      if (L)
        try {
          if (h && !N) throw Error("ROOT_ITEMS_ROLLBACK_EPOCH");
          const M = h && N ? Object.freeze({ epoch: N.epoch, catalog: h.items }) : null;
          if (e.items.paintLocale(M) !== "APPLIED") throw Error("ROOT_ITEMS_ROLLBACK_RETAINED");
        } catch {
          c = !0;
        }
      if (y)
        try {
          if (h && !N) throw Error("ROOT_CATEGORY_ROLLBACK_EPOCH");
          const M = h && N ? Object.freeze({ epoch: N.epoch, catalog: h.category }) : null;
          if (e.category.paintLocale(M) !== "APPLIED") throw Error("ROOT_CATEGORY_ROLLBACK_RETAINED");
        } catch {
          c = !0;
        }
      try {
        h ? t.apply(h.verified) : t.reset();
      } catch {
        c = !0;
      }
      throw i = h, o = b, x;
    } finally {
      l = !1;
    }
  }
  const E = ri({
    runtime: e.runtime,
    registry: vr,
    storage: e.storage,
    browser: e.browser,
    fetchVerified: async (d, h) => {
      const b = Uint8Array.from(await e.load(h)), m = await fi(b, h, e.sha256), w = await e.header.verifyHeaderCatalog(b, h, e.sha256), y = await e.category.verifyCategoryCatalog(b, h, e.sha256), L = await e.items.verifyItemsCatalog(b, h, e.sha256), O = await e.achievementList.verifyAchievementListCatalog(b, h, e.sha256), I = e.loadExtended ? (await li(b, Uint8Array.from(await e.loadExtended(h)), h, e.sha256)).extended : null, x = r.get(h);
      if (x) return x;
      const N = Object.freeze({ version: "3.0.1", locale: h, verified: m, header: w, category: y, items: L, achievementList: O, file252: I });
      return r.set(h, N), N;
    },
    documentLanguage: (d) => {
      const h = r.get(d);
      if (!h) throw Error("ROOT_LOCALE_UNVERIFIED");
      u(h);
    }
  }), A = E.subscribe((d) => {
    if (d.status !== "READY")
      try {
        u(d.active?.pack ?? null);
      } catch {
        c = !0;
      }
  });
  return Object.freeze({
    consumer: E,
    get blocked() {
      return c;
    },
    get generation() {
      return o?.epoch ?? null;
    },
    readFilterLocale() {
      if (c || l) throw Error("ROOT_LOCALE_FILTER_TRANSITION");
      return s;
    },
    renderHeader(d) {
      const h = d.readSelected();
      return v = Object.freeze({ ...d, record: d.record ? Object.freeze({ ...d.record }) : null, selected: h }), c || l || !o ? "LEGACY_RETAINED" : _(o) ? "APPLIED" : "LEGACY_RETAINED";
    },
    close() {
      E.close(), A();
      try {
        i && u(null);
      } catch {
        c = !0;
      }
      v = null, r.clear();
    }
  });
}
function bi(e, t, n) {
  if (e !== t.doc.getElementById("hkiaLocaleChrome") || e.childNodes.length) throw Error("ROOT_LOCALE_HOST");
  const r = di(t);
  r.renderHeader(n);
  const a = ja(ni, { target: e, props: { controller: r } });
  try {
    aa();
  } catch (o) {
    throw r.close(), bn(a).catch(() => {
    }), o;
  }
  let i = !1;
  return Object.freeze({
    readFilterLocale: () => i ? null : r.readFilterLocale(),
    renderHeader: (o) => i ? "LEGACY_RETAINED" : r.renderHeader(o),
    dispose() {
      i || (i = !0, r.close(), bn(a).catch(() => {
      }));
    }
  });
}
const An = Object.freeze({ "file.title": [], "file.notLoaded": [], "file.drop": [], "file.choose": [], "file.chooseAria": [], "file.inputFormats": ["savePath", "accountPath"], "file.exportAccount": [], "file.exportZip": [], "file.zipBusy": [], "file.dirty": [], "file.structuralReadOnly": [], "file.tooLarge": [], "file.unsupportedFormats": [], "file.loadFailedPriorInvalid": [], "file.loadFailedReason": ["reason"], "file.accountExportBlocked": [], "file.zipExportFailed": ["reason"], "native.sessionLabel": [], "native.open": [], "native.close": [], "native.download": [], "native.discard": [], "native.ready": [], "native.busy": [], "native.moduleUnavailable": [], "native.chooseZip": [], "native.exportReady": [], "native.exportBlocked": [], "native.closed": [], "native.exported": [], "native.exportFailed": ["reason"], "native.discarded": [], "native.stagedLabel": [], "native.notDownloaded": [], "native.previewLabel": [], "native.versionSlotLabel": [], "native.revisionLabel": [], "native.capabilitiesLabel": [], "native.applyExportLabel": [], "revision.checking": [], "revision.observed": [], "revision.unknown": [], "revision.inputDetail": ["format", "shaPrefix", "epoch"], "revision.snapshotNotice": ["status"], "revision.fileChanged": [], "revision.unknownReason": ["reason"], "revision.comparisonScope": [], "revision.casMismatch": [], "revision.casUnknown": [], "revision.casLocalMatch": [], "revision.nativeOff": ["blockers"], "file.loadedSummary": ["accountCount", "slotCount"], "file.slotCountUnknown": [], "file.headerSummary": ["version", "versionInt", "platform", "ancestorCount", "metadataCount"], "file.slotStructuralReadOnly": [], "file.slotKnownRead": [], "file.slotDomainSummary": ["version", "achievement", "counter", "collectionHistory"], "file.slotOpaqueWarning": ["achievementExtra", "counterExtra", "unknownUnionCount"], "file.domainReadable": [], "file.domainUnknown": [] }), z = (e) => {
  if (!e) throw Error("FILE_SURFACE_LOCALE_CONTRACT");
}, hi =                 new Set(["epoch", "accountCount", "versionInt", "ancestorCount", "metadataCount", "achievementExtra", "counterExtra", "unknownUnionCount"]), He = { savePath: "save_0.save", accountPath: "SettingsAccount/settings.json" }, vi = (e) => typeof e == "string" && e.length > 0 && e.length <= 16384;
function pi(e, t, n = {}) {
  z(Ct(e) && Object.hasOwn(An, t) && n && Object.getPrototypeOf(n) === Object.prototype);
  const r = An[t];
  z(Object.keys(n).length === r.length && r.every((l) => Object.hasOwn(n, l)));
  const a = {}, i = (l) => new Intl.NumberFormat(e.locale).format(l);
  for (const l of r) {
    const s = n[l];
    hi.has(l) ? s === null && (l === "achievementExtra" || l === "counterExtra") ? a[l] = "UNKNOWN" : (z(Number.isSafeInteger(s) && s >= 0), a[l] = l === "epoch" || l === "versionInt" ? String(s) : i(s)) : l === "slotCount" ? (z(s === null || Number.isSafeInteger(s) && s >= 0), a[l] = s === null ? e.catalog["file.slotCountUnknown"] : i(s)) : Object.hasOwn(He, l) ? (z(s === He[l]), a[l] = s) : l === "shaPrefix" ? (z(typeof s == "string" && /^[a-f0-9]{1,64}$/.test(s)), a[l] = s) : (z(vi(s)), a[l] = s);
  }
  const o = e.catalog[t], c = [...o.matchAll(/\{([A-Za-z][A-Za-z0-9]*)\}/g)].map((l) => l[1]);
  return z(c.length === r.length && r.every((l) => c.filter((s) => s === l).length === 1)), o.replace(/\{([A-Za-z][A-Za-z0-9]*)\}/g, (l, s) => a[s]);
}
const Yt = [
  ["#upload-heading", "text", "file.title", "セーブファイル"],
  ["#dropArea strong", "text", "file.drop", "ファイルをここにドロップ"],
  ["#dropArea .choose-file", "firstText", "file.choose", "ファイルを選択"],
  ["#saveInput", "aria-label", "file.chooseAria", "セーブファイルを選択"],
  [".file-surface section[aria-label]", "aria-label", "native.sessionLabel", "Native検証Session"],
  ["#openNativePreview", "text", "native.open", "Native検証Sessionを開く"],
  ["#closeNativePreview", "text", "native.close", "Sessionを閉じる"],
  ["#nativeDownload", "text", "native.download", "Edited-copy Download"],
  ["#nativeDiscard", "text", "native.discard", "候補を破棄（Reset）"],
  ["#downloadOriginal", "text", "file.backup", "元ファイルをバックアップ"],
  ["#downloadEdited", "text", "file.exportAccount", "編集したsettings.jsonを保存"],
  ["#downloadZip", "text", "file.exportZip", "編集したZIPを保存"]
];
Object.freeze(Yt.map((e) => Object.freeze(e)));
function _i(e, { dynamicZip: t = !1 } = {}) {
  const n = t ? Yt.filter((g) => g[0] !== "#downloadZip") : Yt, r = (g) => {
    const T = e.querySelectorAll(g);
    return z(T.length === 1), T[0];
  }, a = n.map(([g]) => r(g)), i = a.map((g) => g.parentElement), o = r("#saveInput");
  z(o.tagName === "INPUT" && o.type === "file");
  const c = (g, T) => (z(g.firstChild?.nodeType === 3 && (T ? g.childNodes.length === 2 && g.childNodes[1] === o : g.childNodes.length === 1)), g.firstChild), l = n.map(([, g, T, D], Q) => {
    const ge = a[Q], G = g === "text" || g === "firstText" ? c(ge, g === "firstText") : null;
    return { n: ge, t: G, p: g, k: T, ja: D, read: () => G ? G.data : ge.getAttribute(g), write: (be) => G ? G.data = be : ge.setAttribute(g, be) };
  }), s = r("#dropArea p"), v = [...s.childNodes];
  z(v.length === 4 && v[0].nodeType === 3 && v[1].tagName === "CODE" && v[2].nodeType === 3 && v[3].tagName === "CODE" && v[1].textContent === He.savePath && v[3].textContent === He.accountPath);
  const p = [v[1], v[3]].map((g) => c(g, !1)), _ = (g) => {
    const T = [];
    for (let D = g; D; D = D.parentNode) T.push(D);
    return T;
  }, f = new Map([...a, s].map((g) => [g, _(g)])), u = (g, T) => g.length === T.length && g.every((D, Q) => D === T[Q]), E = () => u([...s.childNodes], v) && [v[1], v[3]].every((g, T) => u([...g.childNodes], [p[T]])) && v[1].textContent === He.savePath && v[3].textContent === He.accountPath, A = [...l, ...[0, 2].map((g, T) => ({ n: s, t: v[g], ja: ["SwitchバックアップZIP、", "、または"][T], read: () => v[g].data, write: (D) => v[g].data = D, formatIndex: T }))];
  function d(g) {
    const T = /^([^{}]*)\{savePath\}([^{}]*)\{accountPath\}$/.exec(g.catalog["file.inputFormats"]);
    return z(T), T.slice(1);
  }
  let h = A.map((g) => g.ja), b = null, m = !1, w = -1;
  z(A.every((g) => g.read() === g.ja));
  const y = (g) => g.n.isConnected && u(_(g.n), f.get(g.n)) && (!g.t || g.t.parentNode === g.n), L = (g) => !g.t || (g.n === s ? E() : g.p === "firstText" ? u([...g.n.childNodes], [g.t, o]) : u([...g.n.childNodes], [g.t])), O = () => {
    z(a.every((g, T) => r(n[T][0]) === g && g.parentElement === i[T]) && A.every((g) => y(g) && L(g)) && o.type === "file" && r("#dropArea p") === s);
  };
  O();
  const I = () => A.map((g) => g.read()), x = () => [e.activeElement, ...a.flatMap((g) => [g.disabled, g.hidden, g.value, g.className]), r("#fileStatus").textContent, r("#nativeSessionStatus").textContent], N = (g, T) => g.length === T.length && g.every((D, Q) => D === T[Q]);
  function M(g, T, D) {
    z(!m && Number.isSafeInteger(D) && D >= 0 && D > w), m = !0;
    const Q = [];
    try {
      O(), z(N(I(), h));
      const ge = x();
      for (const [G, be] of A.entries()) h[G] !== g[G] && (Q.push(G), be.write(g[G]));
      return O(), z(N(I(), g) && N(x(), ge)), h = g, b = T, w = D, !0;
    } catch (ge) {
      for (const G of Q.reverse()) {
        const be = A[G];
        try {
          y(be) && be.read() === g[G] && be.write(h[G]);
        } catch {
        }
      }
      throw ge;
    } finally {
      m = !1;
    }
  }
  return Object.freeze({ get active() {
    return b;
  }, ownsCurrent() {
    try {
      return A.every((g, T) => y(g) && g.read() === h[T]);
    } catch {
      return !1;
    }
  }, apply(g, T) {
    z(Ct(g));
    const D = d(g);
    return M(A.map((Q) => Q.k ? g.catalog[Q.k] : D[Q.formatIndex]), g.locale, T);
  }, reset(g) {
    return M(A.map((T) => T.ja), null, g);
  } });
}
const J = (e) => {
  if (!e) throw Error("FILE252_PRODUCT_PORT_CONTRACT");
}, wt = (e) => e !== null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype, qt = (e, t) => wt(e) && Object.keys(e).length === t.length && t.every((n) => Object.hasOwn(e, n)), Zt = (e) => typeof e == "string" && e.length <= 65536, mi =                 new Set(["file.domainReadable", "file.domainUnknown"]);
function mr(e, t = 0) {
  if (qt(e, ["kind", "text"]) && e.kind === "literal" && Zt(e.text)) return Object.freeze({ ...e });
  J(qt(e, ["kind", "key", "params"]) && e.kind === "role" && typeof e.key == "string" && wt(e.params) && t <= 1);
  const n = {};
  for (const [r, a] of Object.entries(e.params))
    wt(a) ? (J(t === 0 && e.key === "file.slotDomainSummary" && ["achievement", "counter", "collectionHistory"].includes(r) && mi.has(a.key)), n[r] = mr(a, 1)) : (J(a === null || typeof a == "string" || Number.isSafeInteger(a)), n[r] = a);
  return Object.freeze({ kind: "role", key: e.key, params: Object.freeze(n) });
}
const wi = (e, t = {}) => Object.freeze({ kind: "role", key: e, params: Object.freeze({ ...t }) });
function yi(e) {
  const t = _i(e, { dynamicZip: !0 }), n =                 new Map();
  let r = null, a = -1, i = !1, o = !1;
  const c = (d) => {
    const h = [];
    for (let b = d; b; b = b.parentNode) h.push(b);
    return h;
  }, l = (d, h) => d.length === h.length && d.every((b, m) => b === h[m]), s = (d) => d.target.isConnected && l(c(d.target), d.anchor) && d.text.parentNode === d.target, v = (d) => s(d) && d.target.childNodes.length === 1 && d.target.firstChild === d.text && d.text.nodeType === 3, p = (d, h) => h.kind === "literal" ? h.text : pi(d, h.key, Object.fromEntries(Object.entries(h.params).map(([b, m]) => [b, wt(m) ? p(d, m) : m]))), _ = (d, h) => d ? h.tokens.map((b) => p(d, b)).join(h.separator) : h.fallback, f = () => {
    for (const [d, h] of n) h.anchor && !d.isConnected && n.delete(d);
  }, u = (d) => {
    d.anchor === null && d.target.isConnected && (d.anchor = c(d.target));
  };
  function E(d, h, b, m = "") {
    J(!i && !o && d && d.nodeType === 1 && Zt(b) && Zt(m));
    const w = n.get(d);
    w && (u(w), J(w.text.parentNode === d && d.childNodes.length === 1 && w.text.data === w.expected && (!w.anchor || l(c(d), w.anchor))));
    const y = h === null ? null : Array.isArray(h) ? h : [h], L = y ? Object.freeze(y.map((N) => mr(N))) : null;
    J(!L || L.length > 0 && L.length <= 32);
    const O = d.firstChild ?? e.createTextNode("");
    J(O.nodeType === 3 && d.childNodes.length <= 1);
    const I = { target: d, text: O, anchor: d.isConnected ? c(d) : null, tokens: L, fallback: b, separator: m, expected: null }, x = L ? _(r, I) : b;
    return d.firstChild || d.append(O), O.data = x, J(d.childNodes.length === 1 && d.firstChild === O && O.data === x), I.expected = x, L ? (f(), J(n.size < 4096 || n.has(d)), n.set(d, I)) : n.delete(d), !0;
  }
  function A(d) {
    if (o) return "BLOCKED";
    if (i || !qt(d, ["epoch", "catalog"]) || !Number.isSafeInteger(d.epoch) || d.epoch < 0 || d.epoch <= a || !(d.catalog === null || Ct(d.catalog))) return "LEGACY_RETAINED";
    i = !0;
    const h = [], b = [];
    try {
      f();
      for (const m of n.values())
        u(m), m.target.isConnected && (J(v(m) && m.text.data === m.expected), b.push({ r: m, old: m.expected, next: _(d.catalog, m) }));
      for (const m of b)
        m.old !== m.next && (h.push(m), m.r.text.data = m.next);
      J(b.every((m) => v(m.r) && m.r.text.data === m.next)), d.catalog ? t.apply(d.catalog, d.epoch) : t.reset(d.epoch);
      for (const m of b) m.r.expected = m.next;
      return r = d.catalog, a = d.epoch, "APPLIED";
    } catch {
      for (const w of h.reverse())
        try {
          s(w.r) && w.r.text.data === w.next && (w.r.text.data = w.old);
        } catch {
        }
      return !t.ownsCurrent() || !h.every((w) => s(w.r) && w.r.text.data === w.old) ? (o = !0, "BLOCKED") : "LEGACY_RETAINED";
    } finally {
      i = !1;
    }
  }
  return Object.freeze({ write: E, forget(d) {
    J(!i), n.delete(d);
  }, paintLocale: A, get active() {
    return r?.locale ?? null;
  }, get blocked() {
    return o;
  } });
}
function Ei(e) {
  const t = () => {
    throw Error("FILE252_DISPLAY_FACTS_CONTRACT");
  }, n = (_, f) => _ !== null && typeof _ == "object" && Object.getPrototypeOf(_) === Object.prototype && Object.keys(_).length === f.length && f.every((u) => Object.hasOwn(_, u)), r = (_) => Number.isSafeInteger(_) && _ >= 0, a = ["hasAccount", "hasSlot", "dirty", "structuralReadOnly", "sourceLoading", "revisionChanged", "archiveLoaded", "zipExportBusy"];
  (!n(e, [...a, "sourceLoadEpoch", "revision", "revisionError", "accountCount", "slotCount"]) || !a.every((_) => typeof e[_] == "boolean") || !r(e.sourceLoadEpoch) || !r(e.accountCount) || !(e.slotCount === null || r(e.slotCount)) || !e.hasAccount && e.accountCount !== 0 || !e.hasSlot && e.slotCount !== 0 || e.revisionError !== null && (typeof e.revisionError != "string" || !e.revisionError.length || e.revisionError.length > 16384)) && t();
  const i = e.revision;
  i !== null && (!n(i, ["schema", "sha256", "epoch", "format"]) || i.schema !== "HKIA.Web05.SourceRevisionDisplay.1" || typeof i.sha256 != "string" || !/^[a-f0-9]{64}$/.test(i.sha256) || !r(i.epoch) || i.epoch < 1 || i.epoch !== e.sourceLoadEpoch || !["zip", "account-json", "save"].includes(i.format)) && t(), e.sourceLoading && (i !== null || e.hasAccount || e.hasSlot || e.dirty || e.archiveLoaded) && t();
  const o = (_, f = {}) => Object.freeze({ kind: "role", key: _, params: Object.freeze(f) }), c = (_) => Object.freeze({ kind: "literal", text: _ }), l = e.structuralReadOnly || e.sourceLoading || e.revisionChanged && i === null, s = [e.hasAccount && e.hasSlot ? c("Account + Save slot") : e.hasAccount ? c("Account JSON") : e.hasSlot ? c("Save slot") : o("file.notLoaded")];
  e.dirty && s.push(o("file.dirty")), l && s.push(o("file.structuralReadOnly"));
  const v = [];
  (i !== null || e.revisionError !== null || e.sourceLoading || e.revisionChanged) && (v.push(o(e.sourceLoading ? "revision.checking" : i ? "revision.observed" : "revision.unknown")), i && v.push(o("revision.inputDetail", { format: i.format, shaPrefix: i.sha256.slice(0, 16), epoch: i.epoch }), o("revision.snapshotNotice", { status: "LOCAL_SNAPSHOT_MATCH_ONLY" })), e.revisionChanged && v.push(o("revision.fileChanged")), e.revisionError !== null && v.push(o("revision.unknownReason", { reason: e.revisionError })), v.push(o("revision.comparisonScope")));
  const p = e.hasAccount || e.hasSlot ? o("file.loadedSummary", { accountCount: e.accountCount, slotCount: e.slotCount }) : null;
  return Object.freeze({ fileStatus: Object.freeze(s), revision: Object.freeze(v), loaded: p, zipLabel: o(e.zipExportBusy ? "file.zipBusy" : "file.exportZip") });
}
function Oi(e) {
  const t = () => {
    throw Error("FILE252_NATIVE_FACTS_CONTRACT");
  }, n = (f, u) => f !== null && typeof f == "object" && Object.getPrototypeOf(f) === Object.prototype && Object.keys(f).length === u.length && u.every((E) => Object.hasOwn(f, E)), r = (f) => typeof f == "string" && f.length > 0 && f.length <= 16384, a = (f) => typeof f == "string" && /^[a-f0-9]{64}$/.test(f), i = (f, u = {}) => Object.freeze({ kind: "role", key: f, params: Object.freeze(u) }), o = (f) => Object.freeze({ kind: "literal", text: f });
  (!n(e, ["ready", "busy", "moduleStaged", "notice", "version", "revision", "capabilities", "stagedOperation"]) || !["ready", "busy", "moduleStaged"].every((f) => typeof e[f] == "boolean") || !(e.version === null || ["3.0.0", "3.0.1"].includes(e.version)) || !(e.revision === null || a(e.revision)) || !(e.capabilities === null || Array.isArray(e.capabilities) && e.capabilities.length <= 256 && e.capabilities.every(r)) || !(e.stagedOperation === null || r(e.stagedOperation))) && t(), e.ready && (!e.version || !e.revision || !Array.isArray(e.capabilities)) && t(), !e.ready && !e.busy && e.revision !== null && t();
  let c = null;
  const l = e.notice;
  n(l, ["kind"]) && ["none", "closed", "exported", "discarded"].includes(l.kind) ? l.kind !== "none" && (c = i("native." + l.kind)) : n(l, ["kind", "reason"]) && r(l.reason) && ["raw", "exportFailed"].includes(l.kind) ? c = l.kind === "raw" ? o(l.reason) : i("native.exportFailed", { reason: l.reason }) : t();
  const s = e.ready ? i("native.ready") : e.busy ? i("native.busy") : c ?? i(e.moduleStaged ? "native.chooseZip" : "native.moduleUnavailable"), v = (f, u) => Object.freeze({ label: i(f), value: u }), p = [];
  e.ready && p.push(
    v("native.versionSlotLabel", o(e.version + " / Saves/save_0.save")),
    v("native.revisionLabel", o(e.revision)),
    v("native.capabilitiesLabel", o(e.capabilities.join(" / "))),
    v("native.applyExportLabel", i(e.stagedOperation !== null ? "native.exportReady" : "native.exportBlocked"))
  );
  const _ = e.stagedOperation === null ? null : Object.freeze({ label: i("native.stagedLabel"), operation: o(e.stagedOperation), status: i("native.notDownloaded") });
  return Object.freeze({ label: i("native.previewLabel"), main: s, details: Object.freeze(p), staged: _, notice: e.ready ? c : null });
}
function Ai(e) {
  const t = () => {
    throw Error("FILE252_SLOT_FACTS_CONTRACT");
  }, n = (v, p) => v !== null && typeof v == "object" && Object.getPrototypeOf(v) === Object.prototype && Object.keys(v).length === p.length && p.every((_) => Object.hasOwn(v, _)), r = (v) => typeof v == "string" && v.length > 0 && v.length <= 16384, a = (v) => Number.isSafeInteger(v) && v >= 0, i = (v, p = {}) => Object.freeze({ kind: "role", key: v, params: Object.freeze(p) });
  n(e, ["header", "slot"]) || t();
  let o = null, c = null;
  const l = e.header, s = e.slot;
  if (l !== null && ((!n(l, ["version", "versionInt", "platform", "ancestorCount", "metadataCount"]) || !r(l.version) || !r(l.platform) || !a(l.versionInt) || !a(l.ancestorCount) || !a(l.metadataCount)) && t(), o = i("file.headerSummary", { ...l })), s !== null) {
    const v = ["achievement", "counter", "collection-history"];
    (!n(s, ["mode", "version", "readable", "extraFields", "unknownUnionCount", "warnings"]) || !["STRUCTURAL_READ_ONLY", "VALIDATED_BASELINE_READ"].includes(s.mode) || !r(s.version) || !n(s.readable, v) || !v.every((u) => typeof s.readable[u] == "boolean") || !v.some((u) => s.readable[u]) || !n(s.extraFields, ["achievement", "counter"]) || !["achievement", "counter"].every((u) => s.readable[u] ? a(s.extraFields[u]) : s.extraFields[u] === null) || !a(s.unknownUnionCount) || !Array.isArray(s.warnings) || s.warnings.length > 256 || !s.warnings.every(r)) && t();
    const p = s.mode === "STRUCTURAL_READ_ONLY";
    !p && (!v.every((u) => s.readable[u]) || s.extraFields.achievement !== 0 || s.extraFields.counter !== 0 || s.unknownUnionCount !== 0) && t(), p && l !== null && t();
    const _ = Object.freeze(Object.fromEntries(v.map((u) => [u, i(s.readable[u] ? "file.domainReadable" : "file.domainUnknown")]))), f = p ? i("file.slotOpaqueWarning", { achievementExtra: s.extraFields.achievement, counterExtra: s.extraFields.counter, unknownUnionCount: s.unknownUnionCount }) : null;
    c = Object.freeze({ mode: i(p ? "file.slotStructuralReadOnly" : "file.slotKnownRead"), version: s.version, domains: _, opaqueWarning: f, warnings: Object.freeze(s.warnings.slice()) });
  } else l !== null && t();
  return Object.freeze({ header: o, slot: c });
}
export {
  yi as createFile252ProductPort,
  wi as file252Role,
  bi as mountProductLocaleRoot192,
  Ei as projectFile252Facts,
  Oi as projectNative252Facts,
  Ai as projectSlot252Facts
};
