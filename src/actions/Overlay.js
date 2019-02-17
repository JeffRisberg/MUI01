import { OVERLAY_OPEN, OVERLAY_CLOSE } from '../constants/action-types';

export const overlayOpen = (overlay) => {
   return {
      type: OVERLAY_OPEN,
      payload: {
         dialog: overlay,
         open: true
      }
   };
};

export const overlayClose = (overlay) => {
   return {
      type: OVERLAY_CLOSE,
      payload: {
         dialog: overlay,
         open: false,
         loading: false
      }
   };
};