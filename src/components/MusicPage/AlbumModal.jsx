import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme";
import DarkTheme from "../../theme/DarkTheme";
import AlbumData from "./AlbumData";
import ListenToSong from "./ListenToSong";
import { Link } from "react-router-dom";

const AlbumModal = ({ open, setOpen, albumName }) => {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: { xs: "90%", md: "60%", lg: "60%" },
          maxWidth: { xs: "90%", md: "60%", lg: "60%" },
          height: "100%",
          fontFamily: "inherit",
          position: "relative",
          color: "white",
          border: `1px solid white`,
        },
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${pickedAlbum[0]?.img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "blur(13px)", // Adjust the blur value as needed
          color: "white",
        }}
      />
      <DialogTitle>{albumName}</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            color: "white",
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
            Stream '{albumName}'
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default AlbumModal;
