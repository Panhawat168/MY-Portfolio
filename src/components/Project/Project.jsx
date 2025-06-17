import React, { useState } from 'react';
import { projects } from "../../constants";
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t,i18n} = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const toKhmerNumber = (num) => {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().split('').map(d => khmerDigits[d]).join('');
  };

  return (
    <section id='projects' className='py-24 pb-24 px-[12vw] md:px[7vw] lg:px[20vw] font-sans relative'>
      {/* Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white uppercase'>{t('project.titles')}</h2>
        <div className="w-24 h-1 mx-auto mt-3" style={{
          background: 'linear-gradient(90deg,#0d83fd,#a855f7)',
          boxShadow: '0 0 2px #0d83fd, 0 0 2px #0d83fd, 0 0 40px #0d83fd'
        }}></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          {t('project.subtitle')}
        </p>
      </div>

      {/* Project Grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {currentProjects.map((project) => (
          <div key={project.id} onClick={() => handleOpenModal(project)} className='border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300'>
            <div className='p-4'>
              <img className='w-full h-48 object-cover rounded-xl' src={project.image} alt={project.title} />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{t(project.title)}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-2 text-md'>{t(project.description)}</p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span key={index} className='inline-block bg-[#251f45] text-md font-semibold text-white rounded-full px-2 py-1 mr-2 mb-2'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50'>
          {t('project.previous')}
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-[#0d83fd] text-white' : 'bg-gray-800 text-gray-300'} hover:bg-[#0d83fd] hover:text-white`}
          >
            {i18n.language === 'km' ? toKhmerNumber(i + 1) : i + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50'>
          {t('project.next')}
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
              <button onClick={handleClose} className='text-white text-3xl font-bold hover:text-[#0d83fd]'>&times;</button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img onClick={handleClose} src={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[85%] object-contain rounded-xl shadow-2xl' />
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{t(selectedProject.title)}</h3>
                <p className='text-gray-400 mb-6 lg:text-base text-xs text-justify'>{t(selectedProject.description)}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className='inline-block bg-[#251f45] text-xs font-semibold text-white rounded-full px-2 py-1 mr-2 mb-2'>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className='flex gap-4'>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className='w-1/2 bg-gray-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    {t('project.viewCode')}
                  </a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className='w-1/2 bg-gray-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    {t('project.viewLive')}
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
