// All landing-page copy lives here. Source: brand_kit Blueprint + Rate Sheet (Oct 2026).

export const company = {
  name: "Prism Preconstruction & Operations",
  domain: "prismprecon.com",
  phone: "818-696-3043",
  phoneHref: "+18186963043",
};

export const hero = {
  label: "Countertop · Flooring · Cabinet · Tile",
  title: "The back office for finish‑trade contractors.",
  lead: "We run your bids, takeoffs, drawings, purchasing and books so you can run the shop. One accountable team, published turnaround times, working inside the tools you already use.",
  stats: [
    { value: "Same day", label: "bid triage" },
    { value: "48 hr", label: "standard takeoffs" },
    { value: "24 hr", label: "rush available" },
    { value: "±3%", label: "variance target vs. field template" },
  ],
};

export const problems = {
  label: "The problem",
  title: "Skilled operators shouldn't be part‑time estimators.",
  intro: "In a busy season the office work loses to the shop floor, and money leaks out in predictable places.",
  items: [
    { title: "Missed and late bids", body: "Invites sit in the inbox, addenda get missed, and bids go out the night before, or not at all." },
    { title: "Slow takeoffs", body: "SF/LF, slab counts, tile area and cabinet schedules get measured after hours. Bid volume is capped by your evenings." },
    { title: "Quotes that go cold", body: "Quotes go out and nobody calls back. Winnable work turns into a lead graveyard." },
    { title: "Purchasing errors", body: "Slab holds, sinks, tile lots and cabinet orders placed late or wrong mean remakes, rush freight and margin loss." },
    { title: "Drawings and submittals", body: "Shop drawings compete with production for the same people, and late approvals push template and install dates." },
    { title: "Books behind", body: "Bank recs months late, no job costing, AR not chased. You can't see which jobs make money." },
  ],
};

export const services = {
  label: "What we do",
  title: "Bid invite to final payment, handled.",
  intro: "Pick one service or hand us the whole office. Every job runs on one shared board, so nothing falls between vendors.",
  items: [
    { title: "Takeoffs", body: "Countertop, flooring, cabinet and tile quantities, senior-checked with an installer's eye for seams, overhang support, sink reveals, layout waste and fillers." },
    { title: "Bid management", body: "Same-day triage of every invite, addenda tracking, deadlines met, and follow-up on every quote you send." },
    { title: "Shop drawings", body: "Countertop, cabinet and tile layouts ready for GC submittal, with a revision included." },
    { title: "Purchasing", body: "Slab holds, sinks, tile lots and cabinet orders placed on time and checked against the takeoff." },
    { title: "Bookkeeping", body: "Bank recs, AP/AR, invoicing, plus job costing, WIP and retainage when you need it." },
    { title: "Software setup", body: "Moraware, Monday.com and QuickBooks set up and cleaned up so the shop actually uses them." },
  ],
  note: "You stay in control: Prism prepares quantities, drawings and paperwork. You set prices and approve every bid and PO.",
};

export const why = {
  label: "Why Prism",
  title: "Built for the finish trades, by the finish trades.",
  items: [
    { title: "One team, the whole workflow", body: "Others sell takeoffs, offshore hours or bookkeeping in pieces. We own the path from the phone ringing to the check clearing." },
    { title: "Trade-native quality", body: "Owner-led with hands-on fabrication experience. Every takeoff gets an installer-perspective review that generalist estimating shops skip." },
    { title: "Speed you can count on", body: "Published turnaround times, and a credit on your bill when we miss a deadline. That keeps us honest." },
  ],
};

export const pricing = {
  label: "Pricing",
  title: "Monthly packages. No contract, cancel anytime.",
  intro: "Your first takeoff on a live bid is free. Annual prepay saves 5%.",
  plans: [
    { name: "Starter", price: "$2,500", featured: false, features: ["Up to 5 bids a month", "Bid management", "Same-day response"] },
    { name: "Pro", price: "$4,500", featured: true, features: ["Up to 8 bids a month", "Bid management + purchasing/POs", "Bookkeeping (≤150 txns)", "4 shop-drawing sheets", "4-hour response"] },
    { name: "Full Office", price: "$6,500", featured: false, features: ["Up to 12 bids a month", "Everything in Pro", "Job costing & WIP", "10 shop-drawing sheets", "PM & scheduling coordinator", "2-hour response"] },
  ],
  perBid: [
    { label: "Small bid", price: "$350" },
    { label: "Medium bid", price: "$500" },
    { label: "Large bid", price: "$800" },
    { label: "XL / complex", price: "from $1,200" },
    { label: "Shop drawings", price: "$140/sheet" },
  ],
  perBidNote: "48-hour turnaround, senior-checked. Rush 24-hour +35%, same-day +50%.",
};

export const contact = {
  label: "Get started",
  title: "Send us your next bid. The first takeoff is on us.",
  intro: "Serving Southern California (LA, Orange County, Inland Empire, Ventura) and finish-trade contractors nationwide, remotely.",
  trades: ["Countertops / stone", "Flooring", "Cabinets", "Tile", "General contractor", "Other"],
};
