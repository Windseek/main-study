function connect(mapStateToProps, mapDispatchToProps) {
  return function(wrapComponent) {
    return <wrapComponent />
  }
}