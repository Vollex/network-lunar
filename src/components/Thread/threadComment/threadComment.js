import React from "react";
import "../threadComment/threadComment.css";

const threadComment = () => {
  return (
    <div className="threadComment">
      <div className="threadCommentinfo">
        <span className="threadCommentinfoText">Anonym</span>
        <span className="threadCommentinfoText"> Time</span>
      </div>
      <p className="threadCommenttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque bibendum vestibulum. Maecenas a egestas risus. Etiam sit amet accumsan justo, quis faucibus elit. Quisque eu leo eu mi vulputate feugiat faucibus et magna.</p>
    </div>
  );
};

export default threadComment;
