export default class RdialogStyle {
  static dialogStyle(isOpen = false) {
    if (!!isOpen) {
      return {
        position: 'fixed',
        visibility: 'visible',
        opacity: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
        transition: 'opacity 0.5s linear'
      };
    }

    return {
      position: 'fixed',
      visibility: 'hidden',
      opacity: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      transition: 'opacity 0.5s linear'
    };
  }

  static backdropStyle() {
    return {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.4)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
    };
  }

  static modalBodyStyle(isOpen = false) {
    if (!!isOpen) {
      return {
        position: 'absolute',
        opacity: 1,
        backgroundColor: '#fff',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      };
    }
    return {
      position: 'absolute',
      opacity: 0,
      backgroundColor: '#fff',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    };
  }
}
