import React from "react";

export default class Accordion extends React.Component {
    static defaultProps = {
        sections: [
            {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
        ]
    }

    state={
        activeSection: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({
            activeSection: sectionIndex
        })
    }

    renderDisplay(section, idx, activeSection) {
            return (
            <li className="accordion-item" key={idx}>
            <button type="button" onClick={() => this.handleSetActiveSection(idx)}>{section.title}</button>
            {(activeSection === idx) && <p>{section.content}</p>}
            </li>
            )
        }

    render() {
        const {activeSection} = this.state
        const {sections} = this.props

        return (
            <ul className="Accordion">
                {sections.map((section, idx) =>
                    this.renderDisplay(section, idx, activeSection)
                )}
            </ul>
        )
    }
}