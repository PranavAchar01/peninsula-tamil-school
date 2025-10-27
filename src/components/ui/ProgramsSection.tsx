'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiUserGroup, HiAcademicCap, HiClock, HiDocumentDownload } from 'react-icons/hi';

export default function ProgramsSection() {
  const { t } = useTranslation();

  const programs = [
    {
      key: 'preK',
      ageRange: '3-5',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      classSize: '12-15',
      schedule: 'Sat 9:00-11:00 AM',
    },
    {
      key: 'beginner',
      ageRange: '6-8',
      icon: '📚',
      color: 'from-blue-500 to-cyan-500',
      classSize: '15-18',
      schedule: 'Sat 11:00-1:00 PM',
    },
    {
      key: 'intermediate',
      ageRange: '9-12',
      icon: '✏️',
      color: 'from-green-500 to-emerald-500',
      classSize: '15-20',
      schedule: 'Sat 1:00-3:00 PM',
    },
    {
      key: 'advanced',
      ageRange: '13+',
      icon: '🎓',
      color: 'from-purple-500 to-indigo-500',
      classSize: '12-15',
      schedule: 'Sat 3:00-5:00 PM',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Age-appropriate Tamil language programs designed for every learning stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative p-6 text-white">
                <div className="text-6xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{t(`programs.${program.key}`)}</h3>
                
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2">
                    <HiUserGroup className="text-xl" />
                    <span className="text-sm">Class Size: {program.classSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiClock className="text-xl" />
                    <span className="text-sm">{program.schedule}</span>
                  </div>
                </div>

                {/* Hover Action */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <HiDocumentDownload />
                    <span>Download Curriculum</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/programs"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
}