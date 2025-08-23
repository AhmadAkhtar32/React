/* Due to synchronous programming, sometimes imp instructions get
 blocked due to some previous instructions, which causes a delay in the UI.
 Asynchronous code execution allows to execute next instructions
 immediately and doesn't block the flow.  */