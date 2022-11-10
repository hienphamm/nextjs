import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";

interface ModalProps {
  children: JSX.Element;
  isVisible: boolean;
  handleClose: VoidFunction;
  title: string;
  onSubmit?: VoidFunction;
  footer?: null | JSX.Element | boolean;
}

function CommonModal({
  children,
  isVisible,
  handleClose,
  onSubmit,
  title,
  footer = true,
}: ModalProps) {
  return (
    <Dialog
      open={isVisible}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={"xs"}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {typeof footer === "boolean" && footer !== null && footer === true ? (
          <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={onSubmit}>
              Login
            </Button>
          </>
        ) : (
          <>{footer}</>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default CommonModal;
