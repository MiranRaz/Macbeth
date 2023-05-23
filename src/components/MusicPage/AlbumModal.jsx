import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones.js";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import AlbumData from "./AlbumData.js";
import ListenToSong from "./ListenToSong.jsx";
import { Link } from "react-router-dom";

const AlbumModal = ({ open, setOpen, albumName }) => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  const handleClose = () => {
    setOpen(false);
  };
  const pickedAlbum = Object.values(AlbumData).filter(
    (album) => album.albumName === albumName
  );
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          minWidth: { xs: "90%", md: "60%", lg: "60%" },
          maxWidth: { xs: "90%", md: "60%", lg: "60%" },
          height: "100%",
          fontFamily: "inherit",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.text,
          border: `1px solid ${theme.palette.primary.text}`,
        },
      }}
    >
      <DialogTitle>{albumName}</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            color: theme.palette.primary.text,
          }}
        >
          <ListenToSong pickedAlbum={pickedAlbum} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link
          to={pickedAlbum[0]?.albumLink}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            endIcon={<HeadphonesIcon />}
            color="error"
            style={{
              fontFamily: "inherit",
              color: "red",
            }}
            onClick={() => {}}
          >
            Stream `{albumName}`
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};
export default AlbumModal;
