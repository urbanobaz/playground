import styles from './Shenzhen.module.scss';

const AxisBottom = ({ xDomains, height, xScale }) => {
    (xDomains && height && xScale) && xDomains.map((tickValue) => (
        <g key={tickValue} transform={`translate(${xScale(tickValue)},${height + 30})`}>
            {tickValue % 2 === 0 && <line transform={'translate(7.5,-8)'} className={styles.middle} x1={0} x2={0} y1={-12} y2={-20} stroke="grey" />}
            <text transform={'translate(-5,-5)'} style={{ fill: "grey", fontSize: "12px", marginLeft: "-20px" }}>
                {tickValue % 2 === 0 ? tickValue : ' '}
            </text>
        </g>
    ));
}

export default AxisBottom;