# Risk Scoring

Risk scoring is not part of the first visual milestone. The MVP may display mock risk labels only to exercise the interface.

## MVP

- Use simple mock labels such as low, medium, high, and severe.
- Do not present mock scores as real assessments.
- Do not add AI-generated scoring.
- Do not add persistence or scoring services.

## Future Direction

A future scoring model should combine transparent factors such as:

- Recent incident volume and severity.
- Government advisory level.
- Conflict, unrest, crime, health, and disaster signals.
- Source freshness and confidence.
- Analyst override or review status, if supported later.

## Design Principle

Every real score should be explainable. Users should be able to see the major factors, source links, and update time behind the displayed risk.
