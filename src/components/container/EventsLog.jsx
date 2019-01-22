import React from "react";
import { connect } from "react-redux";

import Table from "../container/Doors";

import "./EventsLog.scss";

const mapStateToProps = state => {
	return { log: state.log };
};

const ConnectedEventsLog = props => {

	return (
		<div className="events-log">
			{props.log.length > 0 ? (
				<ul>
					{props.log.map((item, index) => (
						<li key={index} className={item.logType==='denied' ? "text-red" : "text-green"}>
							{item.user.name} was {item.logType} access on {item.door}
							<span className="time-stamp">{item.timestamp}</span>
							</li>
						)
					)}
				</ul>
			) : (
				<span>No events to display</span>
			)}
		</div>
	);
};

const EventsLog = connect(
	mapStateToProps
)(ConnectedEventsLog);

export default EventsLog;
