---
title: "Why Your Roadmap Keeps Slipping"
standfirst: "And what your system has to do with it."
description: "Roadmap slippage is a systems problem, not an execution problem — and the usual responses tend to make it worse."
summary: "Roadmap slippage is a systems problem, not an execution problem — and the usual responses tend to make it worse."
pubDate: 2026-05-26
revision: "r1"
ogImage: "/images/roadmap-splash.png"
toc:
  - id: introduction
    label: Introduction
  - id: symptom
    label: The Symptom
  - id: misdiagnosis
    label: The Misdiagnosis
  - id: reality
    label: The Reality
  - id: reading-the-system
    label: Reading the System
  - id: complexity
    label: Complexity
  - id: coupling
    label: Coupling
  - id: work-in-progress
    label: Work in Progress
  - id: feedback
    label: Feedback
  - id: leadership
    label: How Leadership Shapes the System
  - id: what-good-looks-like
    label: What Good Looks Like
  - id: monday-morning
    label: Monday Morning
  - id: closing
    label: Closing
---

## Introduction {#introduction .unnumbered}

This is not a guide to writing better roadmaps. It's not a framework for delivery, and it's not a step-by-step playbook for fixing engineering teams.

It's a way of seeing — a way of understanding why software delivery becomes unpredictable, not at the level of individual tasks or teams, but at the level of the system those teams are working within.

Most of the signals you need are already present. Work taking longer than expected. Unexpected interactions between changes. Issues appearing late in the process. Increasing coordination as delivery progresses. These aren't isolated problems. They are expressions of how your system behaves.

Once you see that clearly, something shifts. You stop treating each issue as a one-off and start recognising the pattern underneath.

What follows is designed to help you make that shift — from focusing on execution alone to understanding the conditions that shape how execution actually plays out.

It won't give you a checklist. But it will give you a better question to ask.

What follows starts with the symptom and why the usual responses don't fix it, then moves through four forces — complexity, coupling, work in progress, and feedback delays — that together shape how a delivery system behaves. From there, it asks how leadership decisions shape all four, what a healthier system actually looks like, and how to start reading your own.

## The Symptom {#symptom}

Roadmaps slip.

Not dramatically at first — just a few days here, a week there. Something that looked straightforward starts taking longer than expected. A dependency appears that no one had factored in. A piece of work gets partially done, then stalls while something else is unblocked.

At this stage, it still feels manageable. You adjust, you replan, you keep moving.

Then it happens again. Another delay. Another "unexpected" issue. Another conversation about why something took longer than it should have.

The language becomes familiar:

- "It turned out to be more complex than we thought"
- "There were a few edge cases we didn't anticipate"
- "We just need to tighten up estimation"

Individually, these explanations sound reasonable. Collectively, they start to form a pattern.

Over time, the shape of delivery changes. Dates move. Priorities shift more often. Work overlaps in ways that weren't intended. Teams spend more time coordinating than progressing.

At some point, confidence starts to erode — gradually, not all at once. Stakeholders stop fully trusting timelines. Teams become more cautious in their commitments. Planning conversations become heavier, slower, more defensive.

From the outside, it can look like inconsistency. From the inside, it feels like drag.

You start to hear phrases like "we'll know more as we get into it," or "it depends on what we find."

Which is another way of saying: *we're not sure how this is going to behave.*

What makes this worth paying attention to is not any single instance. It's that the pattern keeps returning — across different teams, different products, and different organisations, regardless of effort, capability, or intent.

It's tempting to treat each instance as a one-off: a misestimate, a missed detail, a gap in execution. But when the same pattern repeats across different contexts, it stops being incidental.

It becomes structural.

## The Misdiagnosis {#misdiagnosis}

When delivery starts to slip, the instinct is to fix what's visible.

The conversation quickly turns to execution: what could we have done differently, where did we lose time, and how do we stop this happening again?

The responses are usually consistent:

- "We need better estimates"
- "We need more structure"
- "We need tighter control"
- "We need the team to move faster"
- "We might need more people"

None of these are unreasonable. They often feel like the responsible thing to do.

And sometimes they appear to work. A tighter plan creates short-term clarity. More oversight reduces visible drift. Extra people increase apparent capacity. For a while, things feel back under control.

Then the pattern returns. Another delay. Another unexpected interaction. Another moment where progress slows in ways that are hard to explain.

Underneath these responses is a shared assumption: that if we try harder, plan better, and control more tightly, delivery will become predictable.

This assumption is rarely questioned, because it works in many other domains. In environments where work is repeatable, variation is low, and dependencies are stable, more control usually does lead to more predictability.

The mental model underneath is simple. Software delivery is imagined as a pipeline — a sequence of stages:

<p class="pipeline">Plan &rarr; Build &rarr; Test &rarr; Release</p>

Each stage hands off cleanly to the next. If each step is managed well, the outcome should be predictable.

This is the misdiagnosis. Software delivery rarely operates like that.

When we apply a pipeline model to something that isn't a pipeline, we start to see the symptoms we've already described: plans that look clear but don't hold, stages that don't behave independently, work that doesn't flow in a straight line.

In reality, those stages are not isolated. Planning is influenced by unknowns in the system. Building exposes interactions that weren't visible earlier. Testing reveals behaviours created by combinations of changes. Release introduces the system to real-world conditions that weren't fully simulated.

Each stage feeds back into the others — continuously.

Which means something important happens when we try to regain control using the pipeline model. The actions we take start to change the system itself. More planning introduces more coordination. More parallel work introduces more interaction. More pressure introduces more shortcuts.

Each of these feels like a solution. Each also adds new complexity.

Which means the system becomes harder to predict — not easier.

This is why the same pattern keeps returning. The responses aren't wrong in isolation; they're aimed at the symptoms rather than the behaviour producing them. And as long as the model stays the same, so does the outcome.

## The Reality {#reality}

Software delivery is not a pipeline. It behaves like a system.

When we say "the system", we don't just mean the software itself. We mean the whole environment that delivery happens within: the code and infrastructure, the people working on it, the decisions being made, and the way work flows between all of these.

All of these interact to produce the outcomes you see.

That sounds abstract, but the implications are very practical.

In a pipeline, work moves forward step by step. Each stage is largely independent. If something goes wrong, you look at that stage and fix it.

In a system, things don't behave independently.

- Work interacts with other work
- Changes combine in ways you didn't plan for
- Effects show up later, and often somewhere else

What happens in one part influences what happens in another — often indirectly.

This is why the same piece of work can behave differently at different times. A change that felt simple last month can become slow, unpredictable, or risky today. The team hasn't forgotten how to deliver. The environment the change is being introduced into has shifted underneath them.

As systems grow, two things tend to increase: the number of interactions, and the distance between cause and effect.

That combination matters. It means you can't see all the dependencies upfront, you can't predict all the outcomes in advance, and you often only discover issues once work is already in motion.

This is the shift that breaks the pipeline model.

In a pipeline, uncertainty is something you reduce through better planning. In a system, uncertainty is something you have to work with.

Which changes how you interpret what you're seeing. When something takes longer than expected, it isn't always a failure to estimate. When issues appear late, it isn't always a failure of testing. When delivery slows, it isn't always a failure of effort.

Often, it's the system expressing its current state: the level of complexity it has reached, the amount of interaction between work, and the speed at which it can absorb change.

This is why outcomes start to feel inconsistent. The behaviour you're seeing isn't coming from a linear process; it's coming from a system that is constantly changing as work moves through it.

Once you see delivery this way, the earlier patterns begin to make sense: the slipping timelines, the repeated surprises, the sense that things are harder to predict than they should be.

They're not random. They're the natural result of how the system is behaving.

One more thing worth naming. The system isn't just something that behaves a certain way — it's something continuously shaped by the decisions made within it. We'll come back to what that means. For now, hold the idea: the system's behaviour isn't happening to you. It's responding to conditions you're part of setting.

## Reading the System {#reading-the-system}

You don't need to see the system directly to understand how it behaves. You can observe it — through what's already happening around you.

Three patterns are worth paying attention to.

The first is the gap between how work was planned and how it actually moves. Things that start quickly and then slow for reasons that weren't visible at the outset. Tasks that block on something nobody anticipated. Features that sit at "nearly done" for longer than anyone expected.

The second is where problems surface — not where you expected them, not when you expected them, and often not in the part of the codebase where the original change was made.

The third is how decisions play out over time. A push to move faster that leads to more instability later. More work being started that leads to less being finished. Small shortcuts that compound into larger problems downstream.

None of these are random. They are the system expressing its current state.

The useful shift is this: instead of asking why a specific thing went wrong, you start asking what the system is telling you about how it behaves. You don't need perfect visibility, and you don't need to understand every technical detail. You can infer a great deal from the patterns the system produces.

The signals are already there. The question is whether you're reading them as isolated events or as expressions of something deeper.

Unpredictability doesn't arrive suddenly. It accumulates — in small ways that are easy to miss while things are still moving. A task takes slightly longer than expected. A dependency takes time to resolve. A piece of work needs rework that wasn't anticipated. Each one feels ordinary on its own. They combine, they overlap, and over time they shift how the system responds to change.

At a certain point, unpredictability stops being occasional. It becomes the default behaviour of a system operating under increasing pressure from a set of underlying forces.

The next sections break those forces down — starting with the one that's hardest to see.

## Complexity {#complexity}

Complexity is the thing people name last and feel first.

Teams rarely stand in a planning meeting and say "this is more complex than we think." What they say is that something took longer than expected, or that a change had unexpected effects, or that a simple piece of work revealed hidden depth. The word itself usually arrives after the fact, in the explanation for why something didn't go as planned.

That's not a failure of language. Complexity, in the sense that matters here, is hard to see in advance.

It's worth being precise about what we mean. Complexity isn't "hard to understand." It's the amount of behaviour the system already contains — the states it can be in, the rules it follows, the conditions it has to handle, the decisions already encoded into it. It's a property of what's there, before any new change is made. The shorthand: complexity is what makes the system hard to hold in your head.

Early on, there isn't much to hold. A system has few components, few states, few unknowns. A change tends to affect a small part of it, and outcomes are easier to predict. Each new piece of functionality adds something discrete and contained.

That doesn't last. Each new piece of functionality adds new states, new edge cases, and new combinations of conditions the system has to handle. The behaviour the system contains grows with everything you build. Some of it is documented; most of it lives in the code, in the decisions made along the way, and in the heads of the people who were there when each part was built.

Complexity doesn't grow in a straight line. It compounds.

At a certain point, the volume of behaviour becomes too large to fully reason about in advance. The team isn't lacking skill. The system has outgrown what any individual — or any planning session — can hold in mind.

This is where planning starts to lose its grip. You can still define intent and outline the work. You can no longer anticipate every state the change will encounter, or every condition it will have to handle.

And this is why complexity is largely invisible until the work begins. Roadmaps describe what you intend to build; they don't show how much existing behaviour the work will run into. A change that looks straightforward on paper can land in a dense part of the system — somewhere that has accumulated years of edge cases — and take three times as long as it should. A change that looks ambitious can land somewhere shallower and go through quickly.

To anyone watching the plan, this reads as inconsistency — as if the team is faster some weeks than others. It's simply what happens when work of similar planned size meets different depths of accumulated behaviour.

This is also why the phrase "it became more complex than expected" shows up so often. The complexity was already there. It just wasn't visible yet.

As hidden complexity increases, a familiar shift begins. More work uncovers unexpected behaviour. More time is spent understanding what already exists before changing it. More effort goes into reasoning about side effects. The system's ability to absorb change doesn't collapse, but it does slow — unevenly, depending on where the change lands.

Complexity, on its own, would already make delivery harder to predict. It rarely operates alone. Volume of behaviour is one thing; how that behaviour is wired together is another. That's the next force.

## Coupling {#coupling}

A small change is proposed. It looks contained — a minor update to one area, limited scope, low risk. The team estimates it quickly and schedules it for the week.

Three weeks later, it's still being worked on. The change itself wasn't wrong. It touched something that touched something else. A downstream service behaved differently than expected. Another team's release had to be coordinated. A test in a seemingly unrelated area started failing. The change was small. What it was wired to was not.

This is coupling. Where complexity is about how much behaviour the system contains, coupling is about how that behaviour is connected — and therefore how far a change in one place travels before it stops. A loosely coupled system can be enormously complex and still let you change one piece without disturbing the others. A tightly coupled system can be small and still force every change to ripple outward. The two forces compound, but they're different levers. Complexity is what makes the system hard to hold in your head. Coupling is what makes a change in one place show up in another.

Coupling lives across the whole system, not just the code. Components rely on each other. Teams depend on shared areas. Releases need to be sequenced. Decisions made in one place constrain decisions made elsewhere. Each of these is a connection that a change has to travel through.

Early on, coupling is often low. Changes tend to be contained, and teams can make progress without extensive coordination. As the system grows, connections increase — usually as the fastest way to get things working. Reusing existing behaviour, integrating with shared services, building on top of what's already there. Each decision makes sense in isolation. Over time, they create a network of dependencies.

At a certain point, those dependencies start to shape how work behaves. A change is no longer just a change; it propagates. Work can't proceed without input from another team. Releases need careful sequencing to avoid conflicts. What looked like a linear plan becomes a coordination problem.

None of this is inherently wrong. It changes the nature of delivery. Instead of work flowing independently, it becomes interdependent — and interdependence has a cost: more coordination, more communication, more waiting.

Progress slows, not because people are working less, but because more effort is spent managing the connections between work.

Coupling also quietly undermines one of the most common responses to delivery pressure: adding more people. The logic of "more people, more capacity" feels obvious, which is why it's reached for so often. It isn't quite right. Each additional person increases coordination overhead, communication paths, and the number of interactions that need to be managed. In a loosely coupled system, that overhead is manageable. In a tightly coupled one, it grows quickly — sometimes quickly enough that adding people makes delivery slower rather than faster.

Which is often the first moment organisations realise they're dealing with something other than a capacity problem.

## Work in Progress {#work-in-progress}

When delivery feels slow, what's the instinctive response?

Do more at once. If one stream is blocked, start another. If a feature is behind, add a parallel track. If timelines are tight, run more in flight.

From the outside, this looks like progress. More activity. More things moving. More visible output. The standup is full of updates.

Inside the system, something different is happening.

More work in flight means more partial changes in the system at the same time, more overlap between features, more chances for work to interfere with other work. Tasks spend longer waiting on dependencies. Work gets paused and resumed more frequently. "Nearly done" items accumulate.

The system becomes busier without becoming more productive.

This is the effect that's easy to miss: each additional piece of work doesn't just add effort. It adds coordination, context switching, and interaction. People divide their attention. Teams wait on each other more often. Changes collide more frequently. The system spends more time managing work than completing it.

Which creates a loop that's hard to see from inside it:

- Pressure builds
- More work is started in parallel to relieve it
- Parallel work slows delivery through interaction and coordination
- Slower delivery creates more pressure
- Which prompts more work to be started

From the outside, this can look like a team that isn't moving fast enough. From the inside, it feels like everything is moving at once — and nothing is finishing.

There's a second effect that compounds the first. The more work is in flight, the longer it takes for any single piece to reach the point where its behaviour is actually understood. Problems surface later. Rework happens further downstream. The cost of each delay multiplies across everything else in progress at the same time.

Work in progress doesn't just slow delivery. It delays the system's ability to tell you what's happening inside it.

And there is a particularly difficult dynamic that follows from this. The more work is in progress, the harder it becomes to see which pieces are actually struggling. Genuine progress and stalled progress look the same on a status board, because both report movement of some kind. The team is busy, the standups are full, the dashboard is green — but the throughput at the end of the system tells a different story. By the time the gap is visible, the cost of the work already in flight is already locked in.

This is why limiting work in progress is one of the highest-leverage interventions available, and one of the hardest to make. It feels like doing less. What it actually does is let the system finish things.

The contrast, once you've seen it, is hard to unsee. A system carrying too much in flight is recognisable from the inside: full standups, busy dashboards, conversations that are mostly coordination, a sense that everything is moving and nothing is finishing. A system carrying the right amount looks calmer than seems reasonable for the output it produces. The difference isn't effort. It's how much the system is being asked to hold at once.

## Feedback {#feedback}

Feedback is how the system tells you what's happening inside it.

A change is made, and something observable follows — a test passes or fails, an integration works or doesn't, behaviour emerges that confirms or contradicts what you expected. Without this, you're operating on assumption. With it, you can correct course.

In a predictable system, feedback is fast. The loop between cause and effect is short enough that you can read the system's behaviour while the context is still fresh. You make a change, and you quickly know what it did.

As complexity, coupling, and work in progress increase, that loop stretches. No one is ignoring signals; the system is taking longer to produce them. Problems that would have surfaced in hours now surface in days. Issues that would have been caught in testing are only found in integration, or in production, or by customers.

The signal is still there. It's just arriving later.

Timing matters more than it might seem. The later feedback arrives, the more has happened since the original change — more work layered on top, more dependencies formed, more assumptions made based on the unverified state of things. When a problem is finally discovered, it's no longer isolated. It affects everything built on top of it.

This is why late issues feel so disruptive. The problem itself isn't necessarily large. It's how much of the system it touches by the time it's found. A bug caught early is a small change. The same bug caught three weeks later is a small change plus everything that was built on top of the unverified behaviour, plus the coordination needed to undo it.

The effort multiplies in a way that isn't visible in the original estimate.

Feedback delays also shift how teams describe their own work: "we think this is done," "we'll know once it's integrated," "we'll see how it behaves in production." This isn't vague communication — it's accurate communication about an uncertain state. It makes planning harder, because if you don't know how current work will behave, you can't confidently predict what comes next.

Which creates the tightest loop of all:

- Delays produce later feedback
- Later feedback produces more disruption
- More disruption produces further delays

And because feedback delays obscure the system's behaviour from the people trying to read it, each loop is harder to see than the last.

This is the force that makes all the others harder to manage. Complexity, coupling, and work in progress can all be addressed — but only if you can see clearly what they're doing. Feedback is the channel through which the system reveals itself. When that channel slows, everything else becomes harder to reason about.

Of all the forces, this is the one most worth protecting.

## How Leadership Shapes the System {#leadership}

Earlier, we named a simple idea: the system isn't just something that behaves a certain way — it's something continuously shaped by the decisions made within it.

It's worth returning to that properly now, because it's the point where the pattern changes from something you observe to something you are part of.

The forces we've described — complexity, coupling, work in progress, feedback delays — can feel like things that happen to a team. They build up gradually, they're hard to see from the outside, and they often seem to arrive on their own.

They don't arrive on their own. They are shaped, continuously, by the decisions that determine how the system operates.

Some of those decisions are obvious.

Take an ambitious roadmap set to drive growth. On its own, this is rational — it may even be necessary. Within the system, it means more work at once, more parallel change, and more interactions between that work. The system absorbs the ambition as load. Whether that load is sustainable depends on how much the system is already carrying — which is rarely part of the conversation when the roadmap is set.

Or consider pressure on timelines. Also rational, especially when delivery is already slipping and the instinct is to recover lost ground. The system responds to that pressure in specific ways: work is compressed, shortcuts are taken, and feedback is deferred. Each of these is a trade-off — and each raises the likelihood of issues surfacing later, when they're more expensive to resolve.

Adding people follows a similar pattern. Capacity increases in theory. So do coordination overhead, communication paths, and the number of interactions that need to be managed. In a system that's already tightly coupled, more people can mean more friction before they mean more throughput.

None of these decisions are inherently wrong. In isolation, they often make sense. The challenge is that their impact is not isolated. They interact with each other, they compound over time, and they often show up later — not at the moment the decision is made, but weeks or months afterwards, when the connection between cause and effect has become hard to trace.

This is why delivery problems are so easy to misattribute. A delay that looks like a local execution issue is often the accumulated result of decisions made much earlier — each one sensible on its own, but collectively reshaping the conditions the system is operating under.

There's a second layer that's harder to see: the decisions that don't feel like decisions at all.

**Consider what gets measured.** Leadership asks for a delivery dashboard — planned versus actual, milestones hit, features shipped. This is understandable. These metrics describe execution, not the system. They tell you whether the plan held; they don't tell you why it didn't. A status dashboard can stay green until the moment everything slips at once, because it's tracking intent rather than flow. Cadence and throughput tell a different story: how regularly things are finishing, how much is completing versus how much is being started. They're system-level measures that both leadership and engineering can read. But they require a deliberate choice to track them — and that choice is itself a decision that shapes what the organisation pays attention to.

**Consider what gets celebrated.** A team ships a feature ahead of schedule, and it's recognised in the all-hands. That's natural. If speed is consistently rewarded more visibly than stability, the organisation learns what matters — and teams adjust. Corners get cut, not because people are careless, but because the system of incentives tells them shipping is what counts. The consequences — more rework, more fragile foundations, more issues downstream — are absorbed quietly by the system, often surfacing weeks later in ways that no longer trace back to the original shortcut.

**Consider how risk is framed.** A proposal lands to pause new feature work for a sprint and address growing instability. In one organisation, this is heard as an investment — a deliberate choice to improve the system's ability to absorb future change. In another, it's heard as a loss of momentum, a sign that the team is falling behind. Same proposal, different framing, different outcome. When "slowing down to go faster" isn't culturally safe, the decision to stabilise simply doesn't get made — whether you're the one making it or the one hearing it. The absence of that decision is itself something the system responds to.

**Consider what's visible beyond the metrics.** Even with the right things being measured, there's a layer of system behaviour that no dashboard captures. It lives in the patterns that build up over weeks of being inside the system — the same areas causing friction, the same teams becoming bottlenecks, the growing gap between how confident a plan looks and how confident the team feels about it. These signals are vivid to the people closest to the work. They live them daily. They're hard to formalise, which means they often don't reach the people making decisions about scope, headcount, timelines, and priorities. Not because anyone is withholding information — because the organisation hasn't built the channels for system behaviour to travel in a form that can be heard and acted on. That's true whether you're the one trying to surface those signals or the one trying to receive them.

These invisible inputs often have more cumulative effect than the explicit ones, precisely because they're not recognised as inputs. They're the background conditions of how an organisation operates — and they shape the system every day, whether or not anyone is watching.

This is the deeper point: you are not just observing the system. You are shaping it.

Through the roadmaps you set, the timelines you expect, the trade-offs you make, the things you measure, and the things you choose not to look at. Over time, those choices — all of them — determine how predictable delivery becomes.

This is where responsibility shifts. Not away from engineering, but across the system as a whole.

If the system is producing unpredictable outcomes, it is responding to the conditions it has been given. Change those conditions, and the behaviour changes with them.

<div class="cta-inline">
  <p class="cta-inline__body">This is the argument I most want to get right. If it resonates, share it with someone who'd recognise the pattern.</p>
  <button class="cta-inline__copy" id="copyLinkBtn" type="button">Copy link</button>
  <p class="cta-inline__secondary">And if it doesn't — <a href="https://www.linkedin.com/in/pmpowell/" rel="noopener noreferrer" class="plausible-event-name=Connect:+inline+feedback">I'd value knowing why</a>.</p>
</div>

## What Good Looks Like {#what-good-looks-like}

At its core, delivery follows a simple pattern: work enters the system, the system responds, and you observe what happens.

The difference between predictable and unpredictable delivery isn't the steps you follow or the effort you apply. It's the conditions the system is operating under. The same team, the same process, the same intent — under different conditions, the results are different.

So what does a system look like when those conditions are right?

It looks quieter than you might expect. Not because less is happening, but because less is colliding.

Work moves in smaller pieces. Not because the ambition is smaller, but because the changes are designed to be contained — easier to reason about, easier to test, easier to reverse if needed. Nothing relies on everything else moving at the same time. When something does go wrong, the blast radius is small and the response is fast.

Less is in progress at once. There is a deliberate limit to how much the system is asked to absorb. This is often the hardest discipline to maintain, because it requires saying no to things that feel urgent — or at least saying not yet. From the outside, it can look like the team is doing less. From the inside, it's why things are actually finishing.

Feedback is fast. Changes reach a point of real behaviour quickly — integration happens earlier, issues are surfaced sooner, and assumptions are tested before they spread. Problems still occur, but they're smaller, earlier, and cheaper to resolve. The system tells you what's happening while you can still do something about it.

Dependencies are visible and actively managed. Not eliminated — that's rarely possible — but understood well enough that they don't constantly surprise you. Teams know where coordination is required, and sequencing is intentional rather than reactive.

Trade-offs are explicit. Speed, scope, and stability are not all maximised at once. Decisions are made with a clear view of their impact on the system — and critically, the people making those decisions can see enough of the system's behaviour to make them well.

None of this is easy. It requires the willingness to limit what's in flight when everything feels urgent. It requires valuing work that finishes over work that starts. It requires trade-offs that are hard to justify in the short term — slowing down in order to speed up, reducing scope in order to increase predictability, investing in system health when the pressure is to ship.

And it requires something easy to underestimate: trust.

This is a specific kind of trust, and it goes beyond "I trust you to deliver what you committed to." It's closer to: *"I trust you when you tell me the system needs something different from what I was expecting."* That moment — when someone says the team needs to slow down, or that adding another workstream will make things worse, or that the most valuable thing they can do this quarter doesn't appear on the feature roadmap — is where trust is tested. Not in the abstract, but in a room, with a decision to make. And it cuts both ways: a technical leader has to trust that surfacing the signal will be heard rather than punished; a non-technical leader has to trust that the signal isn't a hedge or an excuse but a genuine read of the system. Both halves of that trust have to exist for either to work.

In organisations where that trust exists, the system view becomes actionable. Leadership can hear "we need to reduce what's in flight" without hearing "we can't deliver." Engineering can surface system behaviour without it sounding like excuse-making. The conversation shifts from defending a plan to shaping the conditions that make plans realistic.

Where that trust hasn't been built, the system view stays intellectual. Leaders understand it but don't act on it, because acting on it means doing things that look wrong from the outside — shipping less, starting less, investing in things that aren't visible on a roadmap. And engineering stops surfacing the signals, because the signals aren't heard the way they're intended.

There's a quieter version of this trust worth naming, because it points the same idea in the other direction. The disciplines that make engineering systems predictable — small changes, fast feedback, treating problems as signals rather than failures — are not only useful inside engineering. Offered outward, they often land productively in functions that have under-invested in them: marketing operations, customer experience, internal tooling, planning itself. The same rigour that can feel imposed when it travels into engineering from the outside is frequently welcomed when it travels out of engineering into adjacent work. Healthy organisations make room for that traffic in both directions. It's part of how the shared language gets built.

This is what good looks like. Not control, not perfection, but a system that can absorb change — and an organisation that trusts itself enough to let that happen.

## Monday Morning {#monday-morning .unnumbered}

None of what follows is a checklist.

At this point, it would be easy to start reaching for things to change. That instinct is understandable, but it's worth resisting for a while longer. Acting before you can see the system clearly is part of how the pattern started in the first place.

So this section moves through a few things in order: noticing, interpreting, and what to do with what you find. The signals are already there — in the meetings you already attend, the conversations you already have, and the updates you already read. What changes is how you read them, and what you do with what you find.

A note before going further. The forces we've described don't care whether you write code or not. They show up the same way for a CEO reading a board pack as they do for a CTO reading a pull request queue — but the *handles* are different. A non-technical leader has direct purchase on the conditions the system is operating under: how much is in flight, how risk is framed, what gets celebrated, what trade-offs are visible. A technical leader has direct purchase on the system itself: how work is structured, how feedback loops are designed, how coupling is managed. Both are reading the same system. Both are shaping it. The questions and moves below are written so they work from either side — and where the leverage genuinely differs, the difference is named.

### Signals already in the room

Start with the language. Over the next week, listen for phrases like:

- "It depends on what we find"
- "We'll know more as we get into it"
- "It turned out to be more complex than we thought"
- "We just need to tighten up estimation"

These aren't evasions. They're the system telling you something about how well it can be reasoned about in advance.

Then listen to the shape of your delivery conversations. How much of a typical status update is describing progress, and how much is describing coordination? How often does the phrase "nearly done" appear — and how long does the same item stay nearly done? When something slips, does the conversation move toward *what happened in the system*, or toward *who should have caught it*? The direction of that reflex is itself a signal.

If you're closer to the technical work, there are signals at a different layer. How long does it take a new change to reach a state where its behaviour is understood? How often does someone open a pull request, look at where it's going, and say "this is going to be painful"? How frequently do incidents trace back to interactions nobody had thought about? The signals are different in form but identical in function: they're the system telling you about itself.

None of this requires any new information. Only a different ear.

### From signal to interpretation

Noticing is the first move. Interpreting is the next one — and it's where the four forces become useful, not as categories but as a way of asking *what is this signal actually telling me*.

The connective tissue looks like this. A pattern shows up. Before reaching for an action, you ask which of the underlying forces is most likely producing it. The answer isn't always clean — often more than one force is involved — but the act of locating the signal against the forces changes what you do next.

A few worked examples.

**Pattern: small changes consistently take longer than expected.** The instinct is to push on estimation. The more useful question is whether those changes are running into accumulated behaviour they have to navigate — in which case the issue is complexity, and better estimation won't help — or whether they're tripping over connections to other parts of the system, in which case the issue is coupling, and the answer is decoupling work, not predicting it more accurately. These look almost identical from the outside. They require different responses.

**Pattern: a status board that's full of "in progress" items, very few of which are completing.** The instinct is to ask why people aren't finishing things. The more useful question is whether the system has too much in flight to absorb cleanly. A lot in flight looks like activity; it produces less output than it appears to. The signal isn't about people. It's about how much the system is being asked to hold at once.

**Pattern: issues showing up late — in integration, in production, in customer reports.** The instinct is to invest in better testing. The more useful question is how long the feedback loop is between making a change and learning whether it worked. If that loop has stretched, no amount of testing at the end of it will fix the problem; the signal needs to arrive sooner, in a form that's easier to act on. Better testing helps. Faster feedback helps more.

**Pattern: every plan needs heavy renegotiation halfway through.** The instinct is to plan more rigorously. The more useful question is whether the system is producing enough information early enough for the plan to mean anything. If feedback is delayed and a lot is in flight, plans are essentially predictions made under low information — and tightening the prediction process won't change the information available. The renegotiation isn't a planning failure. It's the system catching up to what the plan didn't know.

In each case, the surface response is reasonable but treats a symptom; the response that helps works on whichever of the four forces is actually producing the behaviour. You won't always know which one it is on the first read, and often more than one is involved. That's fine. The habit worth building isn't perfect diagnosis — it's pausing long enough, before reaching for a fix, to ask which force the signal is most likely about.

### Questions to start asking

The questions below aren't diagnostic questions with clean answers. They're lenses against the four forces. The value is in what surfaces when you hold them up — and which ones you can't answer easily.

**On complexity.** Where does "a small change" most often turn out not to be small? Which areas of the product do you consistently underestimate, and what do those areas have in common? Which parts of the codebase do people quietly avoid, and what does that avoidance cost over time? When work takes longer than expected, is it because the work itself was harder — or because it ran into more existing behaviour than anyone had accounted for?

**On coupling.** How often does one team's progress depend on another team's availability? Where does "we can't move on this until X" appear most often in your planning conversations? Which interfaces are doing more work than they should be, and which dependencies have you stopped questioning because they've been there too long? If any one person were unavailable for a month, what would stop moving? The answers reveal where coupling lives — at the system level, the team level, and the human level — which is rarely a single conversation.

**On work in progress.** How many things are in flight right now? How many of them are "nearly done"? How long have they been nearly done? How often does work get paused mid-flight to make room for something else? When pressure rises, does the response tend to be starting more things or finishing fewer?

**On feedback.** How long after a change is made before you actually know whether it worked? Where do surprises most often come from — integration, testing, production, customers? Which feedback loops have you accepted as slow because they've always been slow, and what would it take to halve them? How much of your rework is triggered by something that was technically "done" weeks ago?

You don't need to answer all of these. You only need to notice which ones you can't answer easily. That's usually where the system has the most to tell you.

### Conversations to start having

A lot of the leverage isn't in diagnosing the system yourself. It's in having better conversations across the line where technical and non-technical leadership meet. That line is where most of the misreading happens — where execution language and system language fail to translate, and where decisions get made on the wrong information.

But there's a precondition hiding inside that sentence, and it's worth pulling into the open before going further. A good question only works if it can be asked and answered honestly. Much of what follows assumes a room where surfacing an uncomfortable signal is safe — where a technical leader can say "this needs to slow down" without it being heard as failure, and a non-technical leader can ask "what aren't you telling me?" without it being heard as a trap. In many organisations, that room doesn't exist yet. And if it doesn't, the strongest question in the world won't help — it will either go nowhere or make things worse.

So the harder questions below are not where you start. They're where you arrive. If the trust to ask them already exists, you'll know, and you can use them directly. If it doesn't, the first work isn't asking the big question — it's making a smaller one safe to answer.

That distinction shapes how to read the rest of this section. The prompts that follow aren't a definitive list — they're a sample of the kind of question that opens these conversations up rather than closes them down. The aim is less to give you the right questions to ask than to show what the right questions tend to have in common, so you can shape your own around the system you're actually in. But they're arranged with a rough gradient in mind, from low stakes to high — because in a room where trust is still being built, the order matters as much as the content.

**Start with questions that cost nothing to answer.** The safest opening question is one where an honest answer carries no risk to the person giving it. *What is the system currently telling us that we're not acting on?* is a good example — it surfaces signals that have already been noticed but haven't been escalated, often because they didn't feel significant enough in isolation. Technical leaders almost always have a list. Asking explicitly tells them it's safe to share it. Crucially, nobody has to indict themselves to answer it; it points at the system, not at a person. A close cousin: *where are we accumulating faster than we're resolving?* This one works across complexity, coupling, work in progress, and unresolved decisions at once — and the form of the answer (a specific area, a vague hand-wave, a long pause) is itself diagnostic.

The point of starting here isn't only that these questions are useful — though they are. It's that they're where trust gets built. When someone surfaces a small signal and watches it get heard and acted on, they learn something the next conversation depends on: that surfacing things doesn't cost them. That's the proof that makes the harder questions possible later. You're not just gathering information; you're demonstrating what happens when information is shared.

**Then questions about pressure and trade-offs.** Once there's some evidence that signals get heard, you can ask questions that require slightly more candour. *What's becoming harder to change than it used to be?* invites someone to admit the system is degrading in an area they may feel responsible for — which only feels safe once the first round of questions has shown it won't be held against them. *If we had to stop doing something to give the system room to stabilise, what would it be?* reframes the conversation from capacity to conditions, and reveals whether the organisation has any language for system health that's distinct from feature progress. *What are we currently betting will hold, that we haven't actually verified?* turns the implicit assumptions inside every plan into something nameable.

**The hardest questions are about the room itself.** *Where in our planning do we keep agreeing to things we're not confident about?* and *what would you tell me if you knew it would be heard the way you intended?* are the ones most worth asking and least safe to ask cold. The second, in particular, is less about content than about trust — the answer, or the inability to answer, tells you whether the conditions for all the other conversations actually exist yet. But notice the trap: if you have to ask it, the trust probably isn't there — and if the trust is there, you can likely already hear the answer without asking. Which is exactly why it belongs at the end of the gradient, not the start. You don't ask it to get an answer. You ask it once the smaller conversations have made the answer sayable.

Here the two directions stop being symmetrical, and it's worth being precise about why. The questions are the same from either side of the line, but the work of making them answerable is not.

If you're the non-technical leader asking, your main risk is that the honest answer never arrives — not because it isn't known, but because the person holding it isn't yet sure it's safe to say. Your leverage is positional: you can make honesty cheap. The move is to respond well to a small disclosure before expecting a large one. When someone surfaces a minor signal, what you do next teaches them what the bigger ones will cost. Act on it visibly, or at least acknowledge it without penalty, and you've lowered the price of the next, harder thing they tell you. Punish it — even subtly, even just by visibly losing interest — and you've quietly closed the channel you were trying to open.

If you're the technical leader surfacing the signal, your main risk is the opposite: the signal arrives but doesn't land, because it's expressed in system language to someone reading in execution language. Trust you don't yet have can't be relied on to bridge that gap, so the move is to make the signal legible in the listener's own terms before leaning on trust that isn't there. Tie it to something they already care about — a date that's at risk, a cost that's accumulating, a commitment that's quietly becoming fragile. "We have too much coupling in the billing path" is true and inert. "Three of the four things we committed to this quarter all depend on the same fragile area, and we haven't verified it will hold" is the same signal, made consequential. You're not dumbing it down; you're translating it into the currency the room actually trades in.

A short example of how this plays out in sequence.

An engineering lead can see that her team is carrying far too much in flight — but she's relatively new, the trust isn't there yet, and she knows that walking into the quarterly review to say "we need to stop starting things" will be heard as her team being slow. So she doesn't open with it. In her next one-to-one with the COO she asks a smaller, safer question instead: *of everything we've committed to this quarter, which one are we least sure about?* The COO names one — an integration the team has already started but isn't confident in. She agrees, adds the specific reason the team is unsure, and makes a small, related request: that they hold off *starting* a separate new piece of work until that integration is finished and they know where it landed. It's a modest, reversible ask, and it costs the COO nothing to grant. Two weeks later, the call has visibly paid off: the integration resolved badly, needing significant rework — but because the separate new work was never started, there was nothing else entangled with it, and the rework stayed contained to the integration alone. She points this out — briefly, without making a thing of it. Now there's a shared reference point: a time when holding work back was the right call, and saying so was rewarded rather than punished. *That's* the conversation that makes the harder one possible. The next quarter, when she needs to say something bigger — that the roadmap as drawn will overload a system that's already struggling — she's not asking the COO to trust an abstraction. She's extending a pattern they've both already seen work.

Notice what made the sequence work. The first move wasn't the important conversation — it was the one that made the important conversation possible. The trust required to ask the hard question wasn't requested; it was built, through a small proof that surfacing a signal led somewhere good. This is the bridge between knowing the right questions and being able to use them: in a low-trust room, the first question's job often isn't to get an answer at all. It's to demonstrate that asking is safe.

Which is why the questions worth asking next are usually the ones these answers point you toward — and why the right starting question is rarely the most important one. The shape stays the same — open, specific to the system you're in, willing to surface things that don't fit neatly on a status report — but the order is dictated by how much trust currently exists in the room. So don't reach for the hardest question first. Build toward it — one answerable question at a time — until the room can bear the one you actually need to ask.

### The first move

Once you can see the system more clearly, the question becomes what to do with what you see. Not the eventual fix — that takes time, and it's specific to the system you're in. The first useful intervention.

In most cases, the most useful first move is a version of the same thing: *give the system room to tell you the truth.* What that looks like in practice depends on the system. For many organisations, two moves are particularly common starting points — not because they're universally right, but because they tend to produce a clear signal quickly and at low cost. They're worth describing in some detail, both as examples and because they're often the moves people resist most.

**Reduce what's in flight.** This feels like doing less. It isn't. It's how the system finishes things. The first move here doesn't have to be dramatic. Pick the one or two pieces of work that are clearly stalling everything around them, decide explicitly to finish those before starting anything new, and watch what happens to the rate at which work clears. The data tends to be quick and surprisingly clear. From a steering position, this looks like agreeing — explicitly — to not start something new this sprint, this week, this fortnight. From closer to the work, it looks like protecting the team from new work entering before existing work finishes, and being willing to make that visible when challenged.

**Shorten the feedback loops that matter most.** This feels like an investment without a clear return. It produces compounding returns once it lands. Pick the loop that's currently producing the most painful surprises — the one where you most often hear "we didn't know that until..." — and ask what it would take to halve it. The shape of the answer varies. Sometimes it's making changes smaller, so they reach a point of real behaviour faster. Sometimes it's integrating earlier, so problems surface in days rather than weeks. Sometimes it's making behaviour visible that currently isn't — adding a metric, a check, a moment of verification that catches drift before it travels. The specific intervention matters less than the principle: find where the system is producing late signal, and move the signal earlier. From a steering position, the move is mostly about creating space and authorisation for this work, and treating it as real work rather than overhead. From closer to the work, it's about being clear-eyed about which loops are silently costing the most, and willing to invest in fixing them ahead of feature work.

Neither of these is a cure. Both are first moves — small enough to be reversible, specific enough to produce a signal, concrete enough to actually do. And neither is automatically the right move for every system. In some organisations, the more pressing intervention is something else entirely: making coupling visible, restructuring how a particular team interacts with the rest of the system, changing what gets measured. The point isn't that these two moves are the answer. The point is that whatever the first move is, it should share their character — small, specific, designed to produce a signal you can read.

It's also worth being honest about resistance, because both of these moves — and most of their alternatives — will be questioned. Reducing what's in flight will look, in the short term, like doing less. Someone will ask why the team isn't taking on the new initiative. Shortening feedback loops will look like time spent on infrastructure instead of features. Someone will ask why progress on the roadmap has slowed. The pushback isn't unreasonable. It's the system of incentives doing exactly what it's been shaped to do — which is part of why the moves are needed in the first place.

The form of the resistance is itself a signal. If the conversation can be had openly — if the trade-off can be named, the rationale heard, and the decision made deliberately — the conditions for system-level change probably already exist, and the first move will land. If the resistance can't be discussed without it being heard as excuse-making or capacity reduction, the move won't land regardless of how well chosen it is. The blocker isn't the move. It's the conversation that needs to happen around it.

Which is why the first move, finally, isn't really about any specific intervention at all. It's about whichever conversation needs to happen first in your organisation to make change in the system possible. Often that's the hardest part. It's also the part with the most leverage.

### A note from experience

I've built engineering systems from the ground up in several early-stage companies. In the beginning, it's scrappy and chaotic — and that's fine, because the system is small enough that you can hold it in your head and change course whenever you need to.

The problems started when the business began to scale. Growth brought pressure, and the pressure always took the same shape: more features, a faster roadmap, and a promise to pay off technical debt once we could afford more people. All the forces described in these pages started to compete at once. My instinct, more than once, was to respond with process — to put structure in place that would strengthen confidence in delivery. Quarterly KPIs, roadmap snapshots, progress reports against plan. These felt responsible. They spoke the language that leadership teams naturally use in other disciplines, where quarterly targets and actuals are how you measure performance.

But delivery systems don't produce those metrics naturally. The system is in a constantly changing state, and looking back through the lens of a quarter that didn't go to plan tells you very little about what is still happening now. The measures that actually help — the kind discussed earlier, like cadence and throughput — require a different conversation entirely.

The intervention I came back to, more than any other, was reducing what was in flight. It was the move I resisted longest, because it felt counterintuitive — every instinct in a growing business says do more, not less. But it was also the move that produced the clearest signal, every time. Within weeks, work that had been stuck for months would start clearing. People would describe the team as faster, when in reality they were just finishing more. Leadership would notice that delivery felt different — calmer, more reliable — without always being able to name what had changed.

What I learned, the hard way, is that everything comes back to two things: communication and simplicity. Not more reporting, but clearer signals. Not more process, but fewer things competing for the system's attention. And crucially, building the social contract that makes this work: agreeing with leadership on what signals to share, helping them learn to read and respond to those signals, and creating enough trust that when the system says "this needs to change," the organisation can actually act on it.

That shift is hard. It requires patience, and it doesn't produce results on day one. But in my experience, as soon as the investment in that way of thinking is felt — as soon as leadership sees the connection between the signals and the outcomes — the penny drops. And the return on that investment is real: not a perfect system, but one that can finally start to tell you the truth about how it's behaving.

## Closing {#closing .unnumbered}

When roadmaps slip, the instinct is to push on execution — push harder, tighten control, ask for better estimates.

But if the system hasn't changed, the outcome won't either.

Predictability isn't something you enforce. It's something your system produces. And that system is shaped — every day — by the decisions made within it: how much work is introduced, how quickly it's expected to move, how speed is traded against stability, and how visible the system's behaviour is allowed to be.

So the question isn't: how do we make this plan hold?

It's: what kind of system are we asking this plan to run on?

That question changes more than it first appears to. It moves the conversation away from blame and toward conditions. It moves attention away from individual performance and toward the environment that performance happens in. And it moves responsibility away from any single team and across the organisation as a whole — because the system's behaviour is the accumulated result of decisions that span every part of it.

Underneath the forces and the signals and the moves, this has really been about how organisations talk to themselves. Whether the people closest to the work can describe what they're seeing in a way that travels. Whether the people steering can hear it without it sounding like an excuse. Whether the language exists for system behaviour to be a real input into decisions, alongside revenue, growth, and timelines. When that conversation works, almost everything else becomes possible. When it doesn't, no amount of process or planning will compensate.

This is slower work than it sounds. It doesn't produce a quarterly result. It produces something more durable: an organisation that can read itself, respond to what it reads, and keep doing both as it grows. That capacity compounds. The teams that build it don't just deliver more predictably — they absorb change more gracefully, recover from setbacks more quickly, and make better decisions earlier, because the information they're working from is closer to the truth.

Once you see delivery this way, the slipping roadmaps stop being a mystery. They become a signal — of how your system is behaving, and an invitation to shape it differently.

The signal has always been there. The question is whether the organisation is ready to hear it.

And that readiness — the trust, the conversations, the shared language between the people building the system and the people steering it — isn't the conclusion of the work.

It's where the work begins.

<section class="about-author">
  <p>I'm a fractional CTO. I work in the space between business leadership and engineering reality — helping founder-led SaaS companies turn engineering drag into something the business can trust, before accumulated fragility becomes too expensive to ignore. I wrote <em>Why Your Roadmap Keeps Slipping</em> because of a pattern I kept seeing: roadmaps slip not because anyone failed, but because the product <em>worked</em>, and the system underneath was never built for the pressure that followed. If that's familiar, I'd genuinely like to compare notes.</p>
  <p><a href="https://www.linkedin.com/in/pmpowell/" rel="noopener noreferrer">Let's talk on LinkedIn &rarr;</a></p>
</section>

<section class="cta-end">
  <p class="cta-end__primary">This is still a draft I'm sharpening, and the readers I trust most are the ones who push back. If you've got a reaction — agreement, disagreement, a story of your own — <a href="https://www.linkedin.com/in/pmpowell/" rel="noopener noreferrer" class="plausible-event-name=Connect:+end-of-book">I want it</a>.</p>
  <p class="cta-end__secondary">And if it's worth a colleague's time, send it along. <button class="cta-inline__copy" id="copyLinkBtnEnd" type="button">Copy link</button></p>
</section>
