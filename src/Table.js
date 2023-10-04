import React from 'react';

const Table = ({ response }) => {
  return (

    <div style={{marginLeft:"22px",marginRight:"22px", textAlign:"center"}}>
    <table  style={{ borderCollapse: "collapse", width: "100%", border: "1px solid #ddd" }}>
  <thead>
    <tr style={{ background: "#f2f2f2" }}>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Adult Age</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount (with Discount Included)</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Child (with 50% off)</th>
    </tr>
  </thead>
  <tbody>
    {response.adult.map((item, index) => (
      <tr key={item.age}>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>₹ {item.age}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>₹ {item.adult} {item.discount && <span> After Discount ₹ ({item.discount})</span>}</td>
        {index === 0 && <td rowSpan={response.adult.length} style={{ padding: "10px", border: "1px solid #ddd" }}> ₹ {response.child}</td>}
      </tr>
    ))}
    <tr>
      <td colSpan="3" style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
        Total Cost - ₹ {response.total_cost}
      </td>
    </tr>
  </tbody>
</table>
</div>

  );
};

export default Table;
