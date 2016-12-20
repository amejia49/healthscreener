import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

Therapist.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string
}
export default function Therapist (props) {
  return (
    <div style={styles.card}>
      <img style={styles.avatar} src= {props.image} alt="" />
      <h1>{props.name}</h1>
      <p>{props.phoneNumber}</p>
      <Link to = "/request-info">
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            Contact
        </button>
      </Link>
    </div>
  )
}
const styles = {
  card: {
    width: '350px',
    border: '1px solid gray',
    boxShadow: '1px 1px 3px #888',
    borderTop: '10px solid green',
    minHeight: '250px',
    padding: '10px',
    margin: '10px',
  },
  avatar: {
    borderRadius: '50%',
    width: '70px',
    margin: '10px',
  }
}
