import React, { useState } from 'react';
import { UserRole, SimulatedTimeline, AppLanguage, StaffMember } from '../types';

interface SimulationBarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  simulatedDay: SimulatedTimeline;
  onSimulatedDayChange: (day: SimulatedTimeline) => void;
  onResetData: () => void;
  language?: AppLanguage;
  onSimulateStaff?: (staffName: string) => void;
  allStaff?: StaffMember[];
}

export const SimulationBar: React.FC<SimulationBarProps> = ({
  currentRole,
  onRoleChange,
  simulatedDay,
  onSimulatedDayChange,
  onResetData,
  language = 'bm',
  onSimulateStaff,
  allStaff = [],
}) => {
  const isBm = language === 'bm';
  const [showStaffSelector, setShowStaffSelector] = useState(false);

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/50 p-4 transition-all">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Brand Header Left: Media Prima Overtime Portal & Environment Info */}
        <div className="flex items-center gap-3.5">
          {/* Media Prima Graphic Emblem */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003da5] via-[#004ac6] to-[#00174b] text-white flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden border border-white/20">
            <span className="material-symbols-outlined text-[22px]">timer</span>
            <div className="absolute -bottom-1 -right-1 flex gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e52421]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#009fe3]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc20e]" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-headline font-extrabold text-sm sm:text-base text-on-surface tracking-tight">
                Media Prima Overtime Portal
              </span>
              <span className="px-2 py-0.5 rounded-md bg-primary-fixed text-on-primary-fixed text-[10px] font-bold tracking-wide uppercase border border-primary/20">
                {isBm ? 'Simulasi Persekitaran & Peranan' : 'System Environment & Role Simulation'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-on-surface-variant mt-0.5">
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[14px] text-primary">apartment</span>
                Balai Berita, Bangsar
              </span>
              <span className="text-outline-variant">•</span>
              <span className="inline-flex items-center gap-1 text-[11px]">
                <span className="material-symbols-outlined text-[13px] text-secondary">verified</span>
                Akta Kerja 1955 Seksyen 60A (Maks 104 jam)
              </span>
            </div>
          </div>
        </div>

        {/* Right Simulation Controls: Role Switcher, Date Simulator & Reset */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-start lg:justify-end">
          {/* Role Switcher */}
          <div className="inline-flex p-1 bg-surface-container-low rounded-xl border border-outline-variant/40 shadow-2xs">
            {/* Staff Role Button */}
            <button
              type="button"
              onClick={() => onRoleChange('staff')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentRole === 'staff'
                  ? 'bg-primary text-on-primary shadow-xs font-bold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
              title={isBm ? 'Tukar pandangan kepada Staf: Ahmad Razak' : 'Switch view to Staff: Ahmad Razak'}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-bold">
                AR
              </span>
              <span>{isBm ? 'Staf: Ahmad Razak' : 'Staff: Ahmad'}</span>
            </button>

            {/* Admin Role Button */}
            <button
              type="button"
              onClick={() => onRoleChange('admin')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                currentRole === 'admin'
                  ? 'bg-primary text-on-primary shadow-xs font-bold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
              title={isBm ? 'Tukar pandangan kepada Pengaudit HR: Asward' : 'Switch view to HR Auditor: Asward'}
            >
              <div className="relative">
                <img
                  src="/asward-profile.jpg"
                  alt="Asward"
                  className="w-5 h-5 rounded-full object-cover ring-1 ring-white/40"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-secondary" />
              </div>
              <span>{isBm ? 'Admin: Asward' : 'Admin: Asward'}</span>
            </button>
          </div>

          {/* Quick Staff Persona Switcher (Media Prima Departments) */}
          {onSimulateStaff && allStaff.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowStaffSelector(!showStaffSelector)}
                className="px-2.5 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-xl text-xs font-semibold transition-all flex items-center gap-1 border border-outline-variant/40"
                title={isBm ? 'Pilih kakitangan Media Prima lain' : 'Select other Media Prima staff persona'}
              >
                <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
                <span className="hidden sm:inline">{isBm ? 'Kakitangan' : 'Team'}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
              </button>

              {showStaffSelector && (
                <div
                  className="absolute right-0 top-full mt-1.5 w-64 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/50 p-2 z-50 flex flex-col gap-1 text-left"
                  onMouseLeave={() => setShowStaffSelector(false)}
                >
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-outline">
                    {isBm ? 'Simulasi Kakitangan Media Prima' : 'Simulate Media Prima Staff'}
                  </div>
                  {allStaff.map((staff) => (
                    <button
                      key={staff.id}
                      type="button"
                      onClick={() => {
                        onSimulateStaff(staff.name);
                        setShowStaffSelector(false);
                      }}
                      className="px-2.5 py-1.5 rounded-lg text-xs text-left hover:bg-surface-container-low flex items-center gap-2 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-md bg-surface-container-high text-primary flex items-center justify-center font-bold text-[10px] shrink-0">
                        {staff.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-on-surface truncate">{staff.name}</div>
                        <div className="text-[10px] text-on-surface-variant truncate">{staff.department}</div>
                      </div>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                          staff.status === 'Submitted'
                            ? 'bg-secondary/15 text-secondary'
                            : 'bg-tertiary/15 text-tertiary'
                        }`}
                      >
                        {staff.status === 'Submitted' ? 'Disahkan' : 'Draf'}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Date & Monthly Cutoff Simulator */}
          <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/40 shadow-2xs">
            <span className="material-symbols-outlined text-outline text-[17px]">calendar_clock</span>
            <label htmlFor="sim-day-select" className="text-xs text-on-surface-variant font-medium hidden sm:inline">
              {isBm ? 'Tarikh:' : 'Date:'}
            </label>
            <select
              id="sim-day-select"
              value={simulatedDay}
              onChange={(e) => onSimulatedDayChange(e.target.value as SimulatedTimeline)}
              className="bg-transparent text-xs text-on-surface font-semibold focus:outline-none cursor-pointer"
            >
              <option value="3">{isBm ? '3 Okt (Awal Kitaran)' : 'Oct 3 (Regular Period)'}</option>
              <option value="7">{isBm ? '7 Okt (Tarikh Akhir ⚠️ 23:59 GMT)' : 'Oct 7 (Cutoff Deadline ⚠️)'}</option>
              <option value="9">{isBm ? '9 Okt (Terkunci Lewat / Overdue)' : 'Oct 9 (Locked / Overdue)'}</option>
              <option value="14">{isBm ? '14 Okt (Pasca Penggajian)' : 'Oct 14 (Post-Cutoff)'}</option>
            </select>
          </div>

          {/* Reset Synthetic Data Button */}
          <button
            type="button"
            onClick={onResetData}
            title={isBm ? 'Tetapkan semula ke set data demo Media Prima asal' : 'Reset to default Media Prima dataset'}
            className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-error rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border border-outline-variant/40"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            <span className="hidden sm:inline">{isBm ? 'Set Semula' : 'Reset Data'}</span>
          </button>
        </div>
      </div>

      {/* Real-Time Context Ribbon for Cutoff Status */}
      <div className="mt-3 pt-3 border-t border-surface-container-high/60 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          {simulatedDay === '7' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[11px] animate-pulse">
              <span className="material-symbols-outlined text-[14px]">warning</span>
              {isBm
                ? 'AMARAN: Tarikh tutup bulanan tamat jam 23:59 GMT hari ini! Pastikan semua borang dihantar.'
                : 'URGENT: Monthly cutoff closes tonight at 23:59 GMT! Submit all pending logs.'}
            </span>
          ) : simulatedDay === '9' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-bold text-[11px]">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              {isBm
                ? 'STATUS: Tempoh tuntutan rasmi telah ditutup & dikunci. Kelulusan pentadbiran HR (Asward) diperlukan.'
                : 'STATUS: Cutoff passed & timesheets locked. Requires HR exception approval from Asward.'}
            </span>
          ) : simulatedDay === '3' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-medium text-[11px]">
              <span className="material-symbols-outlined text-[14px]">edit_calendar</span>
              {isBm
                ? 'Fasa Pengisian Terbuka: Kakitangan boleh merekod jam kerja lebih masa & melampirkan bukti kelulusan.'
                : 'Open Logging Period: Staff can record overtime hours and attach supporting approval slips.'}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-[11px]">
              <span className="material-symbols-outlined text-[14px]">receipt_long</span>
              {isBm
                ? 'Penyelarasan Penggajian: Data telah disahkan dan dieksport ke sistem gaji Media Prima.'
                : 'Payroll Reconciliation: Data verified and exported to Media Prima payroll system.'}
            </span>
          )}
        </div>

        <div className="text-[11px] text-on-surface-variant font-mono">
          {isBm ? 'Kitaran: Oktober 2024' : 'Cycle: October 2024'} • {isBm ? 'Mod Semasa:' : 'Active Perspective:'}{' '}
          <strong className="text-on-surface">{currentRole === 'staff' ? 'Ahmad Razak (TV3)' : 'Asward (HR Auditor)'}</strong>
        </div>
      </div>
    </div>
  );
};
