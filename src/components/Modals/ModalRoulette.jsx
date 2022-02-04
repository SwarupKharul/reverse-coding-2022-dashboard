/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import "./Modals.css";
function ModalRoulette(props) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1300,
          style: {
            backgroundColor: "rgba(255,255,255,0.075)",
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <Fade in={props.open}>
          <Box className=" shadows stile">
            <div className="flex flex-col text-center pt-2">
              <div className=" pb-4 text-xl fontdmteam font-700">
                Question 1 assigned!
              </div>
              <div className="pb-4 pt-6 text-lg fontdmteam flex mx-auto font-400">
                <span className="pr-2">
                  Problem number 8 has been assigned to you as Question 1
                </span>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalRoulette;