import React from 'react'
import FilterCont from './FilterCont'
import FilterItems from './FilterItems'

export default function FilterContent() {
    return (
        <section className="content-section single-content">
            <div className="container">
                <div className="filter-grid">
                    <FilterCont></FilterCont>
                    <FilterItems></FilterItems>
                </div>
            </div>
        </section>
    )
}
